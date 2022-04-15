import React from 'react';
import {
  Platform,
  UIManager
} from 'react-native';
import Navigator from './src/navigation/navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator></Navigator>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
