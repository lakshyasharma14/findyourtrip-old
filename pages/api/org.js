// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PSDB } from "planetscale-node";

const conn = new PSDB("main");

async function handler(req, res) {
  // Run the middleware
  const {
    body: { email, name, password },
    method,
  } = req;
  switch (method) {
    case "POST":
    case "GET":
      try {
        const [rows, fields] = await conn.query("select * from trip");
        res.statusCode = 200;
        // res.json(getRows);
        console.log(res);
      } catch (e) {
        console.log(e);
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
