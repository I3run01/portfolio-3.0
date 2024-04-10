// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_usTranslation from './locales/en_us.json';
import pt_brTranslation from './locales/pt_br.json'; 

i18n.use(initReactI18next).init({
  resources: {
    en_us: { translation: en_usTranslation }, 
    pt_br: { translation: pt_brTranslation }, 

  },
  lng: 'en_us', 
  fallbackLng: 'en_us',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
