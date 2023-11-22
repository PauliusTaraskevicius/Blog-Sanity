export const i18n = {
  defaultLocale: 'lt',
  locales: ["lt", "en", "ru"],
  localeDetection: false,
} as const;

export type Locale = (typeof i18n)["locales"][number];
