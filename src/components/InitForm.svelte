<script>
  import { tmpUser } from "../stores/session";
</script>

<div class="flex mb-4">
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        value={$tmpUser ? $tmpUser.displayName : ''}
        type="text"
        placeholder="Username" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        value={$tmpUser ? $tmpUser.email : ''}
        type="email"
        placeholder="iwanttobepoilyglot@polyglot.com" />
    </div>
  </form>
</div>

<style>

</style>
