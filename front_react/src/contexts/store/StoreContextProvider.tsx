import { useReducer } from 'react';
import { StoreContext } from './StoreContext.ts';
import { storeReducer } from './reducer.ts';
import { OnlyChildrenProps } from 'containers/type';

export function StoreContextProvider<T>({ children }: OnlyChildrenProps) {
  const [store, dispatch] = useReducer(storeReducer<T>, {});
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>;
}
