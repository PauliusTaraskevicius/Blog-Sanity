import "server-only";
import { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  lt: () => import("@/dictionaries/lt.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "lt" ? dictionaries.lt() : dictionaries.en();
};
