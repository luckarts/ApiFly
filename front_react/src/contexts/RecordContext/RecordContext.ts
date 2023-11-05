import { createContext } from 'react';
import { RecordContextType } from './type';

export const RecordContext = createContext<RecordContextType<any> | undefined>(undefined);
