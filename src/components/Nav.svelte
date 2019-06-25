<script>
  import firebase from "firebase/app";

  import { currentUser, setUser, loading, setLoading } from "../stores/session";
  const ky = require("ky/umd").default;

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await firebase.auth().signOut();
      await ky.delete("/logout.json");
      setUser(null);
    } catch (error) {
      console.log(error);
      console.error("Faild to sign out");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
    // FIXME: const csrfToken = getCookie("csrfToken");
  };

  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

    <li>
      <a class={segment === 'blog' ? 'selected' : ''} href="blog">blog</a>
    </li>
    <li>
      {#if $currentUser}
        <a href="#" on:click={handleSignOut}>Logout</a>
      {:else}
        <a href="#" on:click={handleSignIn}>Sign In</a>
      {/if}
    </li>
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
