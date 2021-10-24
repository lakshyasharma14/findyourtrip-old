import { getTripsForOrg } from "../../framework/planetscale/api/trip";

async function handler(req, res) {
  const {
    body: { identifier },
    method,
  } = req;
  switch (method) {
    case "POST":
      try {
        const rows = await getTripsForOrg(identifier);
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
    case "GET":
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
