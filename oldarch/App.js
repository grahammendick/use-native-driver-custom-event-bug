import React from 'react';
import {StateNavigator} from 'navigation';
import {NavigationHandler} from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import Hello from './Hello';

const stateNavigator = new StateNavigator([
  {key: 'hello'},
]);

const App = () => (
  <NavigationHandler stateNavigator={stateNavigator}>
    <NavigationStack>
      <Scene stateKey="hello"><Hello /></Scene>
    </NavigationStack>
  </NavigationHandler>
);

export default App;
