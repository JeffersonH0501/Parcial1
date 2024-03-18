import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import messages_es from './translations/es.json';
import messages_en from './translations/en.json';

const locale = navigator.language.split(/[-_]/)[0]; // Detectar idioma del navegador

console.log(locale);
const messages = {
  'es': messages_es,
  'en': messages_en
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);