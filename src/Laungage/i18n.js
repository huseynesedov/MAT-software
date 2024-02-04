import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


import tEN from "./en/en.json";
import tTR from "./tr/tr.json";
import tRU from "./ru/ru.json";
import tAZ from "./az/az.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
    en: {
      translation: tEN,
    },
    tr: {
      translation: tTR,
    },
    az:{
      translation: tAZ, 
    },
    ru:{
      translation: tRU, 
    }
  },
  
  fallbackLng: 'tr', 
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