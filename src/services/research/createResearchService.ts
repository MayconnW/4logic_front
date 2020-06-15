import { api } from 'services/api';

interface Rating {
  customer_id: string;
  rating: number;
  reason: string;
}

interface RequestParams {
  year: number;
  month: number;
  customers: Rating[];
}

interface Response {
  id: string;
}

export default async ({
  year,
  month,
  customers,
}: RequestParams): Promise<Response> => {
  const { data } = await api.post<Response>('research', {
    year,
    month,
    customers,
  });

  return data;
};
