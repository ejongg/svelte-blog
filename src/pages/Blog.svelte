<script>
  import { onDestroy } from "svelte";
  import store from "../store";
  export let params = {}
  let blog
  
  const unsubscribe = store.subscribe(({blogs}) => {
    blog = blogs.find(b => b.id === params.id)
  })

  onDestroy(() => {
    unsubscribe()
  })
</script>

<h5>{ blog?.title }</h5>
<p>{ blog?.content }</p>