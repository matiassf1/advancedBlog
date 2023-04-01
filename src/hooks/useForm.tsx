import { useEffect, useMemo, useState } from 'react';

type InitialForm<T> = Record<keyof T, string>;

type FormValidations<T> = Record<
  keyof T,
  [(value: string) => boolean, string?]
>;

type UseFormResult<T> = {
  [K in keyof T]: string;
} & {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
  isFormValid: boolean;
} & {
  [K in keyof T as any ]: string | null;
};

export const useForm = <T extends Record<string, unknown>>(
  initialForm: InitialForm<T>,
  formValidations: FormValidations<T>,
): UseFormResult<T> => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<Record<string, string | null>>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

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

  const createValidators = () => {
    const formCheckedValues: Record<string, string | null> = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'Validation error'] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField] as string)
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
    isFormValid,
    ...formValidation,
  } as UseFormResult<T>;
};
