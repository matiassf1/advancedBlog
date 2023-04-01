import { useEffect, useMemo, useState } from 'react';

type InitialForm<T> = Record<keyof T, string>;

type UseFormResult<T> = {
  [K in keyof T]: string;
} & {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
};

export const useForm = <T extends Record<string, unknown>>(
  initialForm: InitialForm<T>
): UseFormResult<T> => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);


  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  } as UseFormResult<T>;
};
