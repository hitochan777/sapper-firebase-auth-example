<script>
  // FIXME: This should not be a component but HOC
  import { onMount } from "svelte";
  import { stores, goto } from "@sapper/app";

  import firebase from "firebase/app";
  import "firebase/auth";
  const { session, page } = stores();

  import {
    setTmpUser,
    currentUser,
    setUser,
    setLoading
  } from "../stores/session.js";

  const ky = require("ky/umd").default;

  setUser($session.user);

  onMount(async () => {
    const result = await firebase.auth().getRedirectResult();
    if (result.user) {
      const token = await result.user.getIdToken();
      // FIXME: const csrfToken = getCookie("csrfToken");
      await ky.post("login.json", { json: { token } });
    }

    firebase.auth().onAuthStateChanged(async user => {
      setTmpUser(user);
      if (user) {
        if (!$currentUser) {
          setLoading(false);
          if ($page.path === "/signup") {
            // avoiding infinite loop
            return;
          }
          goto("/signup");
          return;
        }
      }
      setUser(user);
      setLoading(false);
    });
  });
</script>

<slot />
