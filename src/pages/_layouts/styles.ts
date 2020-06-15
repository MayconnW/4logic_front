import styled from 'styled-components';
import { Menu as DefaultMenu } from 'components/shared';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Menu = styled(DefaultMenu)`
  width: 250px;
  min-height: 100vh;
  border-right: 3px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
