export const i18n = {
  defaultLocale: "en",
  locales: ["lt", "en", "ru"],
  localeDetection: true,
} as const;

export type Locale = (typeof i18n)["locales"][number];
