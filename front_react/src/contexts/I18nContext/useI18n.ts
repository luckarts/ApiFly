import { useContext } from 'react';
import { I18nContext } from './I18nContext';
import { I18nContextType } from './type';

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
