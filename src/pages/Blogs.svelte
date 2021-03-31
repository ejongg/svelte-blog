<script>
  import { onDestroy } from 'svelte';
  import { link } from 'svelte-spa-router'
  import store from '../store'

  let blogList = []
  let newBlog = {
    title: '',
    content: ''
  }

  const unsubscribe = store.subscribe(({blogs}) => {
    blogList = blogs
  })

  const submit = () => {
    store.update(current => ({
      ...current,
      blogs: [
        ...current.blogs,
        { id: (blogList.length + 1) + '', ...newBlog }
      ]
    }))
    newBlog = { 
      title: '',
      content: ''
     }
  }

  onDestroy(() => {
    unsubscribe()
  })
</script>

<form class="mb-5" on:submit|preventDefault={submit}>
  <div class="form-group mb-3">
    <label for="title">Title</label>
    <input name="title" class="form-control" type="text" bind:value={newBlog.title}>
  </div>
  <div class="form-group mb-3">
    <label for="content">Content</label>
    <textarea name="content" class="form-control" bind:value={newBlog.content}></textarea>
  </div>
  <button class="btn btn-primary btn-md" type="submit">Save</button>
</form>
{#each blogList as blog}
  <a use:link href="/blogs/{blog.id}">
    <h3>{blog.title}</h3>
  </a>
{/each}