import { getSession } from "next-auth/client";

export default function Secret(req, res) {
  const session = getSession({ req });

  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }
}
