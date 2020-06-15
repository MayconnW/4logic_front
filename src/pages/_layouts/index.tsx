import React from 'react';

import { Container, Content, Menu } from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

export default Dashboard;
