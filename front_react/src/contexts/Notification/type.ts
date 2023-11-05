import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface NotificationHooks {
  notifications: Notification[];
  setNotifications: Dispatch<SetStateAction<Notification[]>>;
}
export interface Notification {
  type: 'error' | 'success' | 'info';
  message?: string;
}
type NotificationType = 'success' | 'error' | 'info';

export interface NotificationContextProviderProps {
  children: ReactNode;
}
export interface AppNotification {
  id: number;
  message: string;
  type: NotificationType;
}
