import React from 'react';
import { Provider } from 'react-redux';

import Dashboard from './pages/Dashboard';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;
