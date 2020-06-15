import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    width: 320px;
    justify-content: center;
    position: relative;
  }

  form {
    > div {
      margin-top: 3px;
      margin-bottom: 4px;
    }
  }
`;

export const Content = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 20px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.link.fontColor};
      display: block;
      margin-top: 24px;

      transition: color 0.2s;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.link.fontColor)};
      }
    }
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

export const contentAnimation2 = {
  from: { marginRight: '250px', opacity: 0 },
  to: { marginRight: '0', opacity: 1 },
};

interface ActionProps {
  isSignIn: boolean;
}

export const Action = styled.div<ActionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 18px;
  }

  ${({ isSignIn }) =>
    isSignIn &&
    css`
      svg {
        margin-left: 10px;
      }
    `}

  ${({ isSignIn }) =>
    !isSignIn &&
    css`
      svg {
        margin-right: 10px;
        transform: rotate(180deg);
      }
    `}
`;
