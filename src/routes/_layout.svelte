<script>
  import Nav from "../components/Nav.svelte";
  import WithAuth from "../components/WithAuth";
  import Loading from "../components/Loading";

  import { loading } from "../stores/session";

  export let segment;
</script>

<WithAuth>
  {#if $loading}
    <div class="loading">
      <Loading />
    </div>
  {:else}
    <Nav {segment} />
    <main>
      <slot />
    </main>
  {/if}
</WithAuth>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .loading {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>
