import React, { useState } from 'react';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Container } from './style';

interface Props {
  id: string;
}

const Actions: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container loading={loading}>
      <FaEdit size={20} />
      <FaTrashAlt size={20} />
    </Container>
  );
};

export default Actions;
