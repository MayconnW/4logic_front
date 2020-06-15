import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    max-width: 700px;
    margin-top: 20px;
    > div {
      margin-bottom: 15px;
    }
  }
`;

export const CustomersTitle = styled.h1`
  margin-top: 40px;
`;
