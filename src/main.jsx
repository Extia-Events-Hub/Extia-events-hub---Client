import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import globalEs from "./translations/es/global.json";
import globalEn from "./translations/en/global.json";
import globalFr from "./translations/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
    fr: {
      global: globalFr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </AuthProvider>
  </React.StrictMode>
);
