import { SearchContext } from './SearchContext';
import { SearchContextProps } from './type';
import { useState } from 'react';

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<any>(null);
  return (
    <SearchContext.Provider value={{ query, setQuery, selectedOption, setSelectedOption }}>
      {children}
    </SearchContext.Provider>
  );
};
