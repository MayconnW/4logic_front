import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

import { Input, Button, PasswordInput } from 'components/shared';

import { FiMail, FiLock } from 'react-icons/fi';
import { FaSignInAlt } from 'react-icons/fa';

import { Action } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

interface FormProps {
  setIsSignIn(value: boolean): void;
}

const FormSignIn: React.FC<FormProps> = ({ setIsSignIn }) => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    email: Yup.string().required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const methods = useForm<SignInFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true);
    try {
      await signIn({ email, password });
      addToast({
        title: 'Login realizado com sucesso!',
        type: 'success',
      });
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Falha ao fazer login',
        type: 'error',
      });
    }
    setLoading(false);
  });

  return (
    <>
      <FormContext {...methods}>
        <form onSubmit={onSubmit}>
          <Input name="email" icon={FiMail} label="Email" />
          <PasswordInput name="password" icon={FiLock} label="Senha" />
          <Button type="submit" buttonRole="primary" loading={loading}>
            Entrar
          </Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
      </FormContext>
      <Action isSignIn onClick={() => setIsSignIn(false)}>
        <span>Cadastrar-me</span>
        <FaSignInAlt />
      </Action>
    </>
  );
};

export default FormSignIn;
