import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { DummyPage } from '../pages/DummyPage';

const DummyPageRemote = React.lazy(() => import('../pages/DummyPageRemote'));

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DummyPage} />
        <Route path="/remote">
          <Suspense fallback={<div>Loading...</div>}>
            <DummyPageRemote />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
