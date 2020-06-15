import React, { useState, useCallback } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';

import { Input, TextArea } from 'components/shared';

import { FiUser } from 'react-icons/fi';
import { Option } from 'components/shared/Select';
import YearsSelect from './YearSelect';
import MonthsSelect from './MonthsSelect';
import CustomersSelect from './CustomersSelect';

import { Button, BoxDate, BoxActions } from './styles';

export interface FormData {
  year: string;
  month: string;
  customer: string;
  rating: string;
  reason: string;
}

interface Props {
  onSubmitCallback(item: FormData): void | Promise<void>;
  onReset(): void;
  disablePeriod: boolean;
  customers: Option[];
  onChangeYear(y: number): void;
  onChangeMonth(m: number): void;
}

const Form: React.FC<Props> = ({
  onSubmitCallback,
  onReset,
  disablePeriod,
  customers,
  onChangeYear,
  onChangeMonth,
}) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    customer: Yup.string().required('Cliente é obrigatório'),
    rating: Yup.number()
      .required('Nota é obrigatória')
      .min(1, 'Nota mínima deve ser Igual ou superior a 1')
      .max(10, 'Nota máxima deve ser Igual ou inferior a 10'),
    reason: Yup.string().required('Motivo é obrigatório'),
  });

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, reset } = methods;
  const onSubmit = handleSubmit(async formData => {
    setLoading(true);
    try {
      await onSubmitCallback(formData);
      reset({ year: formData.year, month: formData.month });
      addToast({
        title: 'Cliente adicionado com sucesso!',
        type: 'success',
      });
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao adicionar cliente. Favor tente novamente.',
        type: 'error',
      });
    }
    setLoading(false);
  });

  const handleReset = useCallback(() => {
    onReset();
    reset({ year: undefined, month: undefined });
  }, [onReset, reset]);

  return (
    <>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <BoxDate>
            <YearsSelect
              name="year"
              disabled={disablePeriod}
              onChange={onChangeYear}
            />
            <MonthsSelect
              name="month"
              disabled={disablePeriod}
              onChange={onChangeMonth}
            />
          </BoxDate>
          <CustomersSelect name="customer" data={customers} />
          <Input name="rating" icon={FiUser} label="Nota" numbersOnly />
          <TextArea name="reason" icon={FiUser} label="Motivo" />
          <BoxActions>
            <Button
              type="button"
              buttonRole="secondary"
              loading={loading}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button type="submit" buttonRole="primary" loading={loading}>
              Adicionar
            </Button>
          </BoxActions>
        </form>
      </FormContext>
    </>
  );
};

export default Form;
