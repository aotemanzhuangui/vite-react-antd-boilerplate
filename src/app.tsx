import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import configs from '@/configs';
import { SuspenseFallback } from '@/components';
import history from '@/shared/history';

const globalAntdConfigs = configs('antd');
const Home = lazy(() => import('./pages/Home'));
const Other = lazy(() => import('./pages/Other'));

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<SuspenseFallback />}>
        <ConfigProvider {...globalAntdConfigs}>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              path="/other"
              component={Other}
            />
          </Switch>
        </ConfigProvider>
      </Suspense>
    </Router>
  );
}

export default App;
