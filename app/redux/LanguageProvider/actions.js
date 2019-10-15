/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './types';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
