import { createContext } from 'react';
import { SearchContextProps } from './type';

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);
