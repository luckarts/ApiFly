import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { NotificationHooks } from './type';

export const useNotification = (): NotificationHooks => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
