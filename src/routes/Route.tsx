import React from 'react';
import Layout from 'pages/_layouts';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from 'context/AuthContext';

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = true,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();
  return (
    <DefaultRoute
      {...rest}
      render={({ location }) =>
        isPrivate === signed ? (
          <>
            {isPrivate ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Component />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'main',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
