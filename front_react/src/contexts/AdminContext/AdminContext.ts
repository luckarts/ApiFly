import { createContext } from 'react';
import { AdminContextType } from './type';

export const AdminContext = createContext<AdminContextType | undefined>(undefined);
