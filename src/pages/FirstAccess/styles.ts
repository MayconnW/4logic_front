import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled(animated.div)``;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};
