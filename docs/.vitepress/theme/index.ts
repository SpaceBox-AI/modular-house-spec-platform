import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PerfForm from './components/PerfForm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PerfForm', PerfForm)
  },
}
