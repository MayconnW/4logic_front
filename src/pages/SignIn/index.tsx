import React, { useState } from 'react';
import { useSpring, useTransition, useChain, useSprings } from 'react-spring';

import { Transition } from 'react-spring/renderprops';

import logoImg from 'assets/images/logo.svg';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import {
  Container,
  Content,
  contentAnimation,
  contentAnimation2,
} from './styles';

const SignIn: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Container>
      <img src={logoImg} alt="Logo GoBarber" />
      <div>
        <Transition
          items={isSignIn}
          from={{ right: '250px', opacity: 0, position: 'absolute' }}
          enter={{ right: '0', opacity: 1 }}
          leave={{ right: '-250px', opacity: 0 }}
        >
          {item => prop =>
            item && (
              <Content style={prop}>
                <FormSignIn setIsSignIn={setIsSignIn} />
              </Content>
            )}
        </Transition>
        <Transition
          items={!isSignIn}
          from={{ right: '-250px', opacity: 0, position: 'absolute' }}
          enter={{ right: '0', opacity: 1 }}
          leave={{ right: '250px', opacity: 0 }}
        >
          {item => prop =>
            item && (
              <Content style={prop}>
                <FormSignUp setIsSignIn={setIsSignIn} />
              </Content>
            )}
        </Transition>
      </div>
    </Container>
  );
};

export default SignIn;
