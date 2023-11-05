import { useContext } from 'react';
import { SearchContext } from './SearchContext';

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContext');
  }
  return context;
};
