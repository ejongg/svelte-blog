import Home from './pages/Home.svelte'
import Blogs from './pages/Blogs.svelte'
import Blog from './pages/Blog.svelte'

export default {
  '/': Home,
  '/blogs': Blogs,
  '/blogs/:id': Blog
}