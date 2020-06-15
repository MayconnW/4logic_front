import { api } from 'services/api';

export interface Research {
  id: string;
  month: string;
  year: string;
  created_at: Date;
}

interface Response {
  researchs: Research[];
}

export default async (): Promise<Research[]> => {
  const { data } = await api.get<Response>('research');

  return data.researchs;
};
