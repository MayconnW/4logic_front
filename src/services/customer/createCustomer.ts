import { api } from 'services/api';

interface RequestParams {
  name: string;
  responsible_name: string;
  cnpj: string;
}

interface Response {
  id: string;
  name: string;
  responsible_name: string;
  cnpj: string;
  created_at: Date;
}

export default async ({
  name,
  responsible_name,
  cnpj,
}: RequestParams): Promise<Response> => {
  const { data } = await api.post<Response>('customers', {
    name,
    responsible_name,
    cnpj,
  });

  return data;
};
