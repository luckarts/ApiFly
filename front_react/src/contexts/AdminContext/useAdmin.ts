import { useContext } from 'react';
import { AdminContext } from './AdminContext';
import { AdminContextType } from './type';

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
