import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zh from "./src/assets/locales/zh-CN/translation.json";
import en from "./src/assets/locales/en-US/translation.json";
import hk from "./src/assets/locales/zh-HK/translation.json";

export const resources = {
    "en-US": {
        translation: en,
    },
    "zh-CN": {
        translation: zh,
    },
    "zh-HK": {
        translation: hk,
    },
};

i18n
    // 检测用户当前使用的语言
    // 文档: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // 注入 react-i18next 实例
    .use(initReactI18next)
    // 初始化 i18next
    // 配置参数的文档: https://www.i18next.com/overview/configuration-options
    .init({
        compatibilityJSON: "v3",
        // debug: true,
        lng: "en-US",
        // fallbackLng: "zh-CN",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        resources: resources,
    });
export default i18n;
