import { useState, useEffect, ReactNode } from 'react';
import { I18nContext } from './I18nContext';
import i18n from 'i18next';

export interface I18nContextProviderProps {
  children: ReactNode;
}

export const I18nContextProvider = ({ children }: I18nContextProviderProps) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language]);
  return <I18nContext.Provider value={{ language, setLanguage }}>{children}</I18nContext.Provider>;
};
