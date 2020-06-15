import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin-top: 20px;
    > div {
      margin-bottom: 15px;
    }
  }

  > button {
    width: 100%;
    max-width: 400px;
    align-self: flex-end;
  }
`;

export const CustomersTitle = styled.h1`
  margin-top: 40px;
`;
