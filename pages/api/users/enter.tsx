import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";
import db from "../../../libs/server/db";
import bcrypt from "bcrypt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("handler", req.body);
  const { username, email, password, password1 } = req.body;
  if (password !== password1) {
    return res.status(404).end();
  }
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  console.log(user);
  if (user) {
    return res.status(404).end();
  }

  const userEmail = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  if (userEmail) {
    return res.status(404).end();
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  await db.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return res.status(200).end();
}

export default withHandler("POST", handler);
