import * as admin from "firebase-admin";

const findUser = async uid => {
  return true; // TODO: implement
};

const isNewUser = async idToken => {
  const decodedToken = admin.auth().verifyIdToken(idToken);
  let uid = decodedToken.uid;
  const found = await findUser(uid);
  console.log(found);
  return !found;
};

export async function post(req, res) {
  const idToken = req.body.token.toString();
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  try {
    const sessionCookie = await admin
      .auth()
      .createSessionCookie(idToken, { expiresIn });

    const isNew = await isNewUser(idToken);
    if (!isNew) {
      // FIXME: secure should be true for security
      const options = { maxAge: expiresIn, httpOnly: true, secure: false };
      res.cookie("session", sessionCookie, options);
    }

    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(401).send("UNAUTHORIZED");
  }
}
