import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-top: 10px;
  span {
    color: ${({ theme }) => theme.font.color.primary};
  }

  h3 {
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: 700;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${({ theme }) => theme.font.color.primary};

      transition: color 0.15s ease;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.font.color.primary)};
      }
    }

    span {
      margin-left: 8px;
    }

    & + li {
      margin-top: 14px;
    }
  }
`;

export const Action = styled.button`
  border: none;
  background: transparent;

  transition: color 0.15s ease;
  will-change: color;
  color: ${({ theme }) => theme.font.color.primary};
  &:hover {
    color: ${({ theme }) => shade(0.2, theme.font.color.primary)};
  }
`;
