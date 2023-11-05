import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import HttpApi from 'i18next-http-backend';

const languages = ['fr'];

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: languages,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    debug: false,
    ns: ['common', 'routes'],
    defaultNS: 'common',
    detection: {
      order: ['path', 'navigator']
    },
    react: {
      useSuspense: false
    }
  });
// Gestionnaire d'erreur pour les traductions manquantes

export default i18n;
