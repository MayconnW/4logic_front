import { api } from 'services/api';

export interface ApiResponse {
  id: string;
  name: string;
  responsible_name: string;
  cnpj: string;
  created_at: Date;
}

export default async (id: string): Promise<ApiResponse> => {
  const { data } = await api.get<ApiResponse>(`customers/${id}`);

  return data;
};
