import styled from 'styled-components';
import { Button as DefaultButton } from 'components/shared';

export const Button = styled(DefaultButton)`
  width: 120px;
  height: 40px;
`;

export const BoxDate = styled.div`
  display: flex;
  > div {
    width: 200px;
    & + div {
      width: 100%;
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    > div {
      width: 100%;
      & + div {
        margin-left: 0;
      }
    }
  }
`;

export const BoxActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  > button {
    margin-left: 10px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    > button {
      margin-left: 0;
      width: 100%;
      height: 60px;
    }
  }
`;
