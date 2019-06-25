import * as admin from "firebase-admin";

export async function del(req, res) {
  res.cookie("session");
  res.clearCookie("session");
  res.status(200).end();
}
