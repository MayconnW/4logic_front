import React, { useCallback, useState, useEffect } from 'react';
import getResearchs, { Research } from 'services/research/getReseachs';

import Table from './Table';
import { Container } from './styles';

const ListOfSearch: React.FC = () => {
  const [data, setData] = useState<Research[]>([]);

  useEffect(() => {
    getResearchs().then(items => {
      setData(items);
    });
  }, []);

  return (
    <Container>
      <h1>Pesquisas</h1>

      <Table data={data} />
    </Container>
  );
};

export default ListOfSearch;
