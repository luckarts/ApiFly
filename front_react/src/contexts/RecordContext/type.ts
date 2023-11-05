export interface RecordContextType<T = {}> {
  [key: string]: T;
  refetchData: () => void;
}
export interface RecordContextT<T> {
  [key: string]: T[] | undefined;
}
