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
    connectionLimit: 5,
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

export default class DBPool {
  constructor() {
    this.connectionPool = null;
  }

  static execute = async (query) => {
    if (!this.connectionPool) {
      this.connectionPool = mysql.createPool(getConfig()).promise();
    }
    return this.connectionPool.query(query);
  };
}
