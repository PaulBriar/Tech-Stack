import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech Stack" />
    </View>
  </Provider>
);

export default App;