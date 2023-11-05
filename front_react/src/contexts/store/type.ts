import { Dispatch, SetStateAction } from 'react';

export type StoreContextType = {
  store: string;
  dispatch: Dispatch<SetStateAction<string>>;
};
