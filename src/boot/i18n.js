import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const i18n = createI18n({
  locale: 'fr-FR',
  legacy: false,
  messages,
  warnHtmlInMessage: 'off',
  warnHtmlMessage: false,
  fallbackWarn: false,
  missingWarn: false,
})
export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

const { t } = i18n.global
export { i18n, t }
