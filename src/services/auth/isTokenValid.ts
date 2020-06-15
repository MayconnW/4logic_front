import { api } from 'services/api';

export default async (): Promise<boolean> => {
  return true;
  try {
    await api.get('ping');
    return true;
  } catch {
    return false;
  }
};
