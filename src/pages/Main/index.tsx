import React, { useCallback, useState, useEffect } from 'react';
import list, { Customer } from 'services/customer/getCustomers';

import Table from './Table';
import Form from './Form';
import { Container, CustomersTitle } from './styles';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [reload, setReload] = useState(true);

  const onSubmit = useCallback(() => {
    setReload(true);
  }, []);

  useEffect(() => {
    if (!reload) return;
    list().then(customers => {
      setData(customers);
      setReload(false);
    });
  }, [reload]);

  return (
    <Container>
      <h1>Clientes</h1>
      <Form onSubmitCallback={onSubmit} />
      <CustomersTitle>Tabela de Clientes</CustomersTitle>
      <Table data={data} />
    </Container>
  );
};

export default Dashboard;
