import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";
import db from "../../../libs/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("handler", req.body);
  const { username, email, password } = req.body;
  const token = Math.floor(100000 + Math.random() * 900000) + "";

  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (!user) {
    res.status(404).end();
  }
  const tokenField = await db.sMSToken.create({
    data: {
      token,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  console.log(tokenField);

  return res.status(200).end();
}

export default withHandler("POST", handler);
