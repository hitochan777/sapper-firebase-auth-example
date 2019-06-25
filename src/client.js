import * as sapper from "@sapper/app";

import "./firebase";
import "../assets/style.css";

sapper.start({
  target: document.querySelector("#sapper")
});
