import React, { useCallback, useState, useEffect } from 'react';
import getCustomers, { Customer } from 'services/customer/getCustomers';
import getCustomer from 'services/customer/getCustomer';
import createResearch from 'services/research/createResearchService';
import { Option } from 'components/shared/Select';
import { Button } from 'components/shared';
import { useToast } from 'context/ToastContext';

import Table from './Table';
import Form, { FormData } from './Form';
import { Container, CustomersTitle } from './styles';

interface TableData extends Customer {
  rating: string;
  reason: string;
}

const Search: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);

  const { addToast } = useToast();

  useEffect(() => {
    getCustomers().then(items => {
      setCustomers(items);
      setFilteredCustomers(
        items.map(item => ({
          value: item.id,
          title: `${item.name} - (${item.cnpj})`,
        })),
      );
    });
  }, []);

  const onReset = useCallback(() => {
    setData([]);
    setFilteredCustomers(
      customers.map(item => ({
        value: item.id,
        title: `${item.name} - (${item.cnpj})`,
      })),
    );
  }, [customers]);

  const onSubmit = useCallback(
    async (item: FormData) => {
      const {
        cnpj,
        name,
        responsible_name,
        id,
        created_at,
      } = await getCustomer(item.customer);
      setData([
        ...data,
        {
          cnpj,
          name,
          responsible_name,
          id,
          created_at,
          rating: item.rating,
          reason: item.reason,
        },
      ]);

      setFilteredCustomers(
        filteredCustomers.filter(customer => customer.value !== item.customer),
      );
    },
    [data, filteredCustomers],
  );

  const handleSendSearch = useCallback(async () => {
    setLoading(true);
    try {
      await createResearch({
        year,
        month,
        customers: data.map(item => ({
          customer_id: item.id,
          rating: parseInt(item.rating, 0),
          reason: item.reason,
        })),
      });
      addToast({
        title: 'Pesquisa enviada com sucesso!',
        type: 'success',
      });
      onReset();
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao enviar pesquisa. Favor tente novamente.',
        type: 'error',
      });
    }

    setLoading(false);
  }, [addToast, data, month, year, onReset]);

  return (
    <Container>
      <h1>Pesquisa</h1>
      <Form
        onSubmitCallback={onSubmit}
        onReset={onReset}
        disablePeriod={data.length > 0}
        customers={filteredCustomers}
        onChangeYear={(y: number) => setYear(y)}
        onChangeMonth={(m: number) => setMonth(m)}
      />
      <CustomersTitle>
        <>
          Tabela de Clientes
          {data.length > 0 &&
            ` - ${data.length} / ${customers.length} (${
              (data.length * 100) / customers.length
            }%)`}
        </>
      </CustomersTitle>
      <Table data={data} />
      <Button
        buttonRole="primary"
        type="button"
        loading={loading}
        onClick={handleSendSearch}
      >
        Salvar Pesquisa
      </Button>
    </Container>
  );
};

export default Search;
