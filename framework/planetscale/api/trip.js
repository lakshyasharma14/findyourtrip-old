import DBPool from "../config/db";

export const getTrips = async () => {
  const [rows, fields] = await DBPool.execute("select * from trip");
  return JSON.parse(JSON.stringify(rows));
};
