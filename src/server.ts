import express from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { writable } from "svelte/store";
import * as admin from "firebase-admin";
// import sirv from "sirv"; FIXME: user import syntax
const sirv = require("sirv");
// import sapper from "@sapper/server"; FIXME: user import syntax
const sapper = require("@sapper/server");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "database URL here"
});

const app = express();

app
  .use(
    json(),
    cookieParser(),
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware({
      session: async (req: express.Request, res: express.Response) => {
        let user = null;
        const sessionCookie = req.cookies.session || "";
        try {
          user = await admin.auth().verifySessionCookie(sessionCookie, true);
        } catch (error) {}
        return { user };
      }
    })
  )
  .listen(PORT, () => {});
