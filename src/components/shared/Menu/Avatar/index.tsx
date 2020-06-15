import React, { useState, useEffect } from 'react';

import { getInitials } from 'util/string';
import { Container, AvatarBox, Initials } from './style';

interface Props {
  name: string;
  pictureUrl?: string;
}

const Avatar: React.FC<Props> = ({ name, pictureUrl }) => {
  const [initials, setInitials] = useState('');

  useEffect(() => {
    if (!name) return;

    setInitials(getInitials(name));
  }, [name]);

  return (
    <Container>
      <AvatarBox>
        {pictureUrl ? (
          <img src={pictureUrl} alt="Imagem do usuario" />
        ) : (
          <Initials>{initials}</Initials>
        )}
      </AvatarBox>
    </Container>
  );
};

export default Avatar;
