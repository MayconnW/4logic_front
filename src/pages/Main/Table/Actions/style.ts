import styled from 'styled-components';

interface ContainerProps {
  loading: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 149px;
  display: flex;
  justify-content: ${({ loading }) => (loading ? 'center' : 'flex-start')};
  svg {
    cursor: pointer;
    & + svg {
      margin-left: 8px;
    }
  }
`;
