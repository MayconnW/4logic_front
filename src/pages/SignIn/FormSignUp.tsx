import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';
import createUser from 'services/register/createUser';

import { Input, Button, PasswordInput } from 'components/shared';

import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { FaSignInAlt } from 'react-icons/fa';

import { Action } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface FormProps {
  setIsSignIn(value: boolean): void;
}

const FormSignUp: React.FC<FormProps> = ({ setIsSignIn }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().required('Cpf é obrigatório').email('Email inválido'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .min(6, 'Mínimo de 6 caracteres'),
  });

  const methods = useForm<SignUpFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ name, email, password }) => {
    setLoading(true);
    try {
      await createUser({ name, email, password, avatar_id: '' });
      addToast({
        title: 'Pronto! Você já pode fazer seu login!',
        type: 'success',
      });
      setIsSignIn(true);
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao criar usuário. Favor tente novamente.',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <Input name="name" icon={FiUser} label="Nome" />
          <Input name="email" icon={FiMail} label="Email" />
          <PasswordInput name="password" icon={FiLock} label="Senha" />
          <Button type="submit" buttonRole="primary" loading={loading}>
            Cadastrar
          </Button>
        </form>
      </FormContext>
      <Action isSignIn={false} onClick={() => setIsSignIn(true)}>
        <FaSignInAlt />
        <span>Voltar para o Login</span>
      </Action>
    </>
  );
};

export default FormSignUp;
