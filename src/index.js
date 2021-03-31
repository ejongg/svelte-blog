import App from './App.svelte'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/index.css'

const app  = new App({
  target: document.body
})

export default app

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}