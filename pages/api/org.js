import mysql from "mysql2";
import fs from "fs";

const {
  PLANETSCALE_DB,
  PLANETSCALE_DB_HOST,
  PLANETSCALE_DB_USERNAME,
  PLANETSCALE_DB_PASSWORD,
  PLANETSCALE_SSL_CERT_PATH,
} = process.env;

const getConfig = () => {
  let config = {
    database: PLANETSCALE_DB,
    host: PLANETSCALE_DB_HOST,
    password: PLANETSCALE_DB_PASSWORD,
    user: PLANETSCALE_DB_USERNAME,
  };
  if (PLANETSCALE_SSL_CERT_PATH) {
    config.ssl = {
      ca: fs.readFileSync(PLANETSCALE_SSL_CERT_PATH),
    };
  }
  return config;
};

const conn = mysql.createConnection(getConfig());

async function handler(req, res) {
  const {
    body: { email, name, password },
    method,
  } = req;
  switch (method) {
    case "POST":
    case "GET":
      try {
        const [getRows, _] = await conn.promise().query("select * from trip");
        res.statusCode = 200;
        res.json(getRows);
      } catch (e) {
        const error = new Error(
          "An error occurred while connecting to the database"
        );
        error.status = 500;
        error.info = {
          message: "An error occurred while connecting to the database",
          more: e.message,
        };
        throw error;
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
