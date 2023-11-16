export const i18n = {
  defaultLocale: "lt",
  locales: ["en", "lt", 'ru'],
} as const;

export type Locale = (typeof i18n)["locales"][number];
