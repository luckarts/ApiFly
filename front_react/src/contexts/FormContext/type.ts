import { ReactNode } from 'react';

import {
  UseFormRegister,
  SubmitHandler,
  setValue,
  UseFormHandleSubmit,
  FieldValues,
  FieldErrors
} from 'react-hook-form';
import { RulesType } from 'src/common/rules/type';
export interface FormContextProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  fields: any[];
  title?: string;
  rules?: RulesType;
  handleOnDrop?: (e: React.DragEvent) => void;
  onSubmit: SubmitHandler<FieldValues>;
  addFields?: () => void;
  defaultValue?: any;
  setValue: any;
}

export interface FormProviderProps {
  fields: any[];
  title?: string;
  rules?: RulesType;
  handleOnDrop?: (e: any) => void;
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  addFields?: () => void;
  defaultValue?: any;
}
