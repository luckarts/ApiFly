import { FormContext } from './FormContext';
import { useForm } from 'react-hook-form';
import { FormProviderProps } from './type';

export const FormProvider = ({
  children,
  defaultValue,
  fields,
  rules,
  title,
  handleOnDrop,
  onSubmit,
  addFields
}: FormProviderProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  return (
    <FormContext.Provider
      value={{
        defaultValue,
        rules,
        setValue,
        register,
        handleSubmit,
        errors,
        fields,
        title,
        handleOnDrop,
        onSubmit,
        addFields
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
