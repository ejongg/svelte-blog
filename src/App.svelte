<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Navbar from './core/Navbar.svelte'
</script>

<div class="app container mt-5">
  <div class="row">
    <div class="col-2">
      <Navbar />
    </div>
    <div class="col">
      <Router routes={routes}></Router>
    </div>
  </div>
</div>