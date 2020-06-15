import { api } from 'services/api';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar_id: string;
}

export default async (): Promise<User> => {
  try {
    const { data } = await api.get<User>('sessions');
    return data;
  } catch {
    return {} as User;
  }
};
