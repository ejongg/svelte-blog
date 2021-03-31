<script>
  import { link } from 'svelte-spa-router'
</script>

<div class="list-group">
  <a use:link href="/" class="list-group-item">Home</a>
  <a use:link href="/blogs" class="list-group-item">Blogs</a>
</div>