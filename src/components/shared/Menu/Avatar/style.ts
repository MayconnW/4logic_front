import styled from 'styled-components';

import gold from 'assets/images/medal.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-bottom: 57px;
  }
`;

export const AvatarBox = styled.div`
  bottom: 0;
  transform: rotateZ(-27deg);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));

  border: 3px solid ${({ theme }) => theme.menu.avatar.borderMedalColor};
  border-right: 3px solid ${({ theme }) => theme.menu.avatar.borderColor};

  border-top: 3px solid ${({ theme }) => theme.menu.avatar.borderColor};
  border-radius: 50%;
  padding: 3px;
  width: 129px;
  height: 129px;
  text-transform: uppercase;

  > img {
    width: 117px;
    height: 117px;
    transform: rotateZ(27deg);
    border-radius: 50%;
    object-fit: cover;
  }

  &::after {
    transform: rotateZ(27deg) translateY(-10px) translateX(8px);

    content: '';
    background: url(${gold});

    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
    width: 34px;
    height: 42px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: rotateZ(27deg);
  background-color: ${({ theme }) => theme.menu.avatar.backgroundColor};
  border-radius: 50%;
  font-size: 3em;
  color: ${({ theme }) => theme.font.color.secondary};
  font-weight: 500;
`;
