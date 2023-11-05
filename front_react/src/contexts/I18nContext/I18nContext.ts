import { createContext } from 'react';
import { I18nContextType } from './type';

export const I18nContext = createContext<I18nContextType | undefined>(undefined);
