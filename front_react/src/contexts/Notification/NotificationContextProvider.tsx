import { useState } from 'react';
import { NotificationContext } from './NotificationContext';
import { Notification, NotificationContextProviderProps } from './type';

export const NotificationContextProvider = ({ children }: NotificationContextProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>{children}</NotificationContext.Provider>
  );
};
