import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'
import global_fr from './translations/fr/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    fr: {
      global: global_fr
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
