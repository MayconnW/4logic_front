import { api } from 'services/api';

interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export default async ({
  email,
  password,
}: SignInParams): Promise<SignInResponse> => {
  const {
    data: { token },
  } = await api.post<SignInResponse>('sessions', {
    email,
    password,
  });

  return { token };
};
