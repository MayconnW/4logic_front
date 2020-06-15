import React from 'react';
import { useAuth } from 'context/AuthContext';
import { getFirstAndLastName } from 'util/string';
import { FaSearchengin, FaRegBuilding, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

import { Container, Title, MenuList, Action } from './styles';

interface Props {
  className?: string;
}

const Menu: React.FC<Props> = ({ className }) => {
  const { user, signOut } = useAuth();

  return (
    <Container className={className}>
      <div>
        <Avatar name={user.name} />
        <Title>
          <span>Bem vindo(a):</span>
          <h3>{getFirstAndLastName(user.name)}</h3>
        </Title>
      </div>
      <div>
        <MenuList>
          <li>
            <Link to="main">
              <FaRegBuilding size={30} /> <span>Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="search">
              <FaPlus size={30} /> <span>Nova Pesquisa</span>
            </Link>
          </li>
          <li>
            <Link to="researchs">
              <FaSearchengin size={30} /> <span>Pesquisas Registradas</span>
            </Link>
          </li>
        </MenuList>
      </div>
      <div>
        <Action onClick={() => signOut()}>Sair</Action>
      </div>
    </Container>
  );
};

export default Menu;
