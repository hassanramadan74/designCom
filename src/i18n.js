import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations using HTTP
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language if no match is found
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // Path to the translation files
    }
  });

export default i18n;
