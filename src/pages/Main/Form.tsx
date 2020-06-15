import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';
import createCustomer from 'services/customer/createCustomer';

import { Input, Button } from 'components/shared';

import { FiUser } from 'react-icons/fi';

interface FormData {
  name: string;
  responsible_name: string;
  cnpj: string;
}

interface Props {
  onSubmitCallback(): void;
}

const Form: React.FC<Props> = ({ onSubmitCallback }) => {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    responsible_name: Yup.string().required(
      'Nome do responsável é obrigatório',
    ),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
  });

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit, reset } = methods;
  const onSubmit = handleSubmit(async ({ name, responsible_name, cnpj }) => {
    setLoading(true);
    try {
      await createCustomer({ name, responsible_name, cnpj });
      reset();
      addToast({
        title: 'Cliente adicionado com sucesso!',
        type: 'success',
      });
      onSubmitCallback();
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

  return (
    <>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <Input
            name="name"
            icon={FiUser}
            label="Nome Fantasia ou Razão Social"
          />
          <Input
            name="responsible_name"
            icon={FiUser}
            label="Nome do responsável"
          />
          {!isEditing && <Input name="cnpj" icon={FiUser} label="CNPJ" />}
          <Button type="submit" buttonRole="primary" loading={loading}>
            {isEditing ? 'Salvar' : 'Cadastrar'}
          </Button>
        </form>
      </FormContext>
    </>
  );
};

export default Form;
