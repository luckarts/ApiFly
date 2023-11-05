import { useContext } from 'react';
import { StoreContext } from './StoreContext';

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }

  const [store, dispatch] = context;

  const getStore = (key: string, defaultValue: any) => {
    return store[key] ?? defaultValue;
  };
  const setStore = (key: string, payload: any) => {
    dispatch({ type: 'SET_DATA', key, payload });
  };

  return { getStore, setStore };
};
