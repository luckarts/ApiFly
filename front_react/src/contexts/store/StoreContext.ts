import { createContext, Dispatch } from 'react';
type Action<T> = { type: 'SET_DATA'; key: string; payload: T };

type StoreContextType<T> = [Record<string, T>, Dispatch<Action<T>>];

export const StoreContext = createContext<StoreContextType<any> | null>(null);
