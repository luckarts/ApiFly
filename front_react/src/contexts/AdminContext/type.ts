import { Dispatch, SetStateAction } from 'react';

export type AdminContextType = {
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
};
