import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import tRU from "./ru/ru.json";
import tAZ from "./az/az.json";
import tEN from "./en/en.json";
import tTR from "./tr/tr.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
    az:{
      translation: tAZ, 
    },
    ru:{
      translation: tRU, 
    },
    en:{
      translation: tEN, 
    },
    tr:{
      translation: tTR, 
    }
  },
  
  fallbackLng: 'az', 
  debug: true, 
  interpolation: {
    escapeValue: false, 
  },
  detection: {
    order: ['localStorage'], 
    caches: ['localStorage'],
  },
    });
  
  export default i18n;