export interface SearchContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: any;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
}
