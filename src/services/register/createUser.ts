import { api } from 'services/api';

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  avatar_id: string;
}

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  avatar_id: string;
  created_at: Date;
}

export default async ({
  name,
  email,
  password,
  avatar_id,
}: RegisterParams): Promise<RegisterResponse> => {
  const { data } = await api.post<RegisterResponse>('users', {
    name,
    email,
    password,
    avatar_id,
  });

  return data;
};
