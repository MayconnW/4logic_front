import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Main from 'pages/Main';
import Search from 'pages/Search';
import ListOfSearch from 'pages/ListOfSearch';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} isPrivate={false} />
    <Route exact path="/main" component={Main} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/researchs" component={ListOfSearch} />
  </Switch>
);

export default Routes;
