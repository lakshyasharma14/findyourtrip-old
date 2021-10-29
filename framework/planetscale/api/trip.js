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

export const getTripsForOrg = async (identifier) => {
  try {
    const [rows, fields] = await DBPool.execute(
      "select * from trip t join org o on (o.id = t.org_id) where o.identifier = '" +
        identifier +
        "'"
    );
    return JSON.parse(JSON.stringify(rows));
  } catch (e) {
    return (error = new Error(
      "An error occurred while connecting to the database"
    ));
  }
};

export const getOrg = async (identifier) => {
  try {
    const [rows, fields] = await DBPool.execute(
      "select * from org where identifier ='" + identifier + "'"
    );
    return JSON.parse(JSON.stringify(rows));
  } catch (e) {
    return (error = new Error(
      "An error occurred while connecting to the database"
    ));
  }
};
