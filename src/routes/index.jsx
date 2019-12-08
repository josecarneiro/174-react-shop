import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SingleProductView from './../views/SingleProductView';
import ListProductView from './../views/ListProductView';

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/product/:id" component={SingleProductView} />
      <Route path="/" component={ListProductView} />
    </Switch>
  );
}
