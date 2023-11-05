import { useReducer, ReactElement, useState, ReactNode } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { recordReducer } from 'contexts/RecordContext/reducer';
import { useQuery, useQueryClient } from 'react-query';
import { RecordContextType } from './type';
import { RecordContext } from './RecordContext';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

interface RecordContextProps<T = {}> {
  children: ReactNode | ((data: T) => ReactElement);
  name: string;
  callback: () => Promise<T>;
}

export function RecordProvider<T>({
  children,
  name,
  callback,
  mutateFunction
}: RecordContextProps<T> & { mutateFunction?: (data: Partial<T>) => Promise<T> }) {
  const queryClient = useQueryClient();
  const [localData, setLocalData] = useState({});
  const [state, dispatch] = useReducer(recordReducer<T>, {});
  const { isLoading, isError } = useQuery<T, Error>(name, callback, {
    onSuccess: (data) => {
      // Stocker les données dans le cache de React Query
      queryClient.setQueryData(name, data);
      // Stocker les données dans le state local (via useReducer ou useState)
      dispatch({ type: 'SET_DATA', key: name, payload: data });
      setLocalData({ data });
    },
    retry: false
  });
  const updateDataMutation = useMutation(
    (newData: Partial<T>) => {
      return mutateFunction(newData);
    },
    {
      onSuccess: (updatedData) => {
        console.log(updatedData, 'updatedData');
        queryClient.setQueryData(name, updatedData);
        dispatch({ type: 'SET_DATA', key: name, payload: updatedData });
        setLocalData({ data: updatedData });
      }
    }
  );
  if (isLoading) return <LoadingIndicator />;
  if (isError) return <div>Error</div>;
  const contextValue = {
    ...state,
    updateData: updateDataMutation.mutate,
    isUpdating: updateDataMutation.isLoading,
    updateError: updateDataMutation.isError
  };
  return (
    <RecordContext.Provider value={contextValue as RecordContextType<T>}>
      {localData &&
        Object.keys(localData).length > 0 &&
        (typeof children === 'function' ? children(localData as T) : children)}
    </RecordContext.Provider>
  );
}
