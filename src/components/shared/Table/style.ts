import styled from 'styled-components';
import { Table as ResponsiveTable } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export const Table = styled(ResponsiveTable)`
  border-collapse: collapse;
  font-size: 0.75em;
  margin-bottom: 1.5em;

  thead tr {
    background-color: ${({ theme }) => theme.table.thead.tr.backgroundColor};
    color: ${({ theme }) => theme.table.thead.tr.color};
    height: 40px;
    height: 55px;
    text-align: left;

    th {
      padding-left: 20px;
      height: 55px;
    }
  }

  tbody tr {
    border-top: ${({ theme }) => theme.table.tbody.tr.borderWidth} solid
      ${({ theme }) => theme.table.tbody.tr.borderColor};
    height: 50px;
    color: ${({ theme }) => theme.table.tbody.tr.color};

    td {
      padding-left: 20px;
      background-color: ${({ theme }) => theme.table.tbody.td.backgroundColor};
    }
  }

  @media screen and (max-width: 640px) {
    tbody tr {
      height: auto;
      border: none !important;

      td {
        padding: 5px;
      }
    }
  }
`;

export const SingleLineWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  height: 50px;

  > div,
  > svg {
    margin-right: 10px;
  }
`;
