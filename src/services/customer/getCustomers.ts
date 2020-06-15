import { api } from 'services/api';

export interface Customer {
  id: string;
  name: string;
  responsible_name: string;
  cnpj: string;
  created_at: Date;
}

interface Response {
  customers: Customer[];
}

export default async (): Promise<Customer[]> => {
  const { data } = await api.get<Response>('customers');

  return data.customers;
};
