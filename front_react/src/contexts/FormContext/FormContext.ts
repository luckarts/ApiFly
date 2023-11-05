import { createContext } from 'react';
import { FormContextProps } from './type';

export const FormContext = createContext<FormContextProps | null>(null);
