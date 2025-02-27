import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
debug: true,
lng: 'ch',
resources: {
    en:{
        translation: {
            greeting: 'Hello, Vite!',
        }
    },
    es:{
        translation: {
            greeting: 'Hola, Vite!',
        }
    },
    kh:{
        translation: {
            greeting: 'សួស្តី',
        }
    },
    ch:{
        translation: {
            greeting: '您好，Vite!',
        }
    }
},
})
