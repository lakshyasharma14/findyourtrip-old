import DBPool from "../config/db";

export const getTrips = async () => {
  try {
    const [rows, fields] = await DBPool.execute("select * from trip");
    return JSON.parse(JSON.stringify(rows));
  } catch (e) {
    return (error = new Error(
      "An error occurred while connecting to the database"
    ));
  }
};
