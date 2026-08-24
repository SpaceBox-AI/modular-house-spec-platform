import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PerfForm from './components/PerfForm.vue'
import ComplianceForm from './components/ComplianceForm.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PerfForm', PerfForm)
    app.component('ComplianceForm', ComplianceForm)
  },
}
