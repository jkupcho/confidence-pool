import * as React from 'react';
import { Provider } from 'react-redux';
import Picks from './containers/Picks';
import './App.css';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Picks />
      </Provider>
    );
  }
}

export default App;
