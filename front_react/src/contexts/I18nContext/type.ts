import { Dispatch, SetStateAction } from 'react';

export type I18nContextType = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};
