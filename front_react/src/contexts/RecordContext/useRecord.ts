import { useContext } from 'react';
import { RecordContext } from './RecordContext';

export const useRecord = <T extends any>(key: string) => {
  const context = useContext(RecordContext) as Record<string, T[]>;
  if (!context) {
    throw new Error("useRecord doit être utilisé à l'intérieur d'un RecordProvider");
  }
  if (context[key] === undefined) {
    throw new Error(`La clé "${key}" n'existe pas dans le contexte ou renvoie undefined`);
  }
  return {
    data: context[key],
    updateData: context.updateData,
    isUpdating: context.isUpdating,
    updateError: context.updateError
  };
};
