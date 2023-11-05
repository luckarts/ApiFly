import { createContext } from 'react';
import { NotificationHooks } from './type';

export const NotificationContext = createContext<NotificationHooks | undefined>(undefined);
