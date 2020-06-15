import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import numbersOnly from 'util/numbersOnly';
import signInService from 'services/auth/signIn';
import isTokenValid from 'services/auth/isTokenValid';

import getLogged, { User } from 'services/auth/getLogged';
import { setToken } from 'services/api';
import { useToast } from './ToastContext';

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: User;
  signed: boolean;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [apiToken, setApiToken] = useState<string>(() => {
    const token = localStorage.getItem('@4logic:token');

    if (token) {
      setToken(token);
      return token;
    }

    return '';
  });

  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const { token } = await signInService({
      email,
      password,
    });

    localStorage.setItem('@4logic:token', token);
    setToken(token);
    setApiToken(token);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@4logic:token');

    setToken('');
    setApiToken('');
  }, []);

  const updateUserData = useCallback(async () => {
    const data = await getLogged();
    if (!data.id) {
      setTimeout(() => {
        updateUserData();
      }, 200000);
      return;
    }
    setUser(data);
  }, []);

  const { addToast } = useToast();
  useEffect(() => {
    if (!apiToken) return;
    isTokenValid().then(isValid => {
      if (!isValid) {
        signOut();
        addToast({
          title: 'Sua Sessão expirou, por favor refaça seu login',
          type: 'error',
        });
        return;
      }
      updateUserData();
    });
  }, [apiToken, signOut, addToast, updateUserData]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!apiToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
