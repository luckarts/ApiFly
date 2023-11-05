import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useCustomForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
