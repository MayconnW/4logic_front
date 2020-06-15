import React from 'react';
import { Customer } from 'services/customer/getCustomers';
import Actions from './Actions';

import { CustomersTable } from './styles';

interface Props {
  data: Customer[];
}

const Table: React.FC<Props> = ({ data }) => {
  const headers = [
    {
      column: 'Razão Social ou Nome Fantasia',
      dataValue: 'name',
    },
    {
      column: 'Nome do Responsável',
      dataValue: 'responsible_name',
    },
    {
      column: 'CNPJ',
      dataValue: 'cnpj',
    },
    {
      column: 'Data de Cadastro',
      dataValue: 'formatted_created_at',
    },
    {
      column: ' ',
      dataValue: 'id',
      fn: (id: string) => <Actions id={id} />,
    },
  ];

  return <CustomersTable headers={headers} data={data} />;
};

export default Table;
