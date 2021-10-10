import { getTrips } from "../../framework/planetscale/api/trip";

async function handler(req, res) {
  const {
    body: { email, name, password },
    method,
  } = req;
  switch (method) {
    case "POST":

    case "GET":
      try {
        const rows = await getTrips();
        res.statusCode = 200;
        res.json(rows);
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
