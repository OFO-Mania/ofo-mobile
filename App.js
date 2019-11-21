import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { dsn } from './sentry.json';

import * as Sentry from '@sentry/react-native';

Sentry.init({ dsn });

const App = () => {

  return(
    <>
      <View style={{
          backgroundColor: '#4D2A88',
          height: Platform.OS === 'ios' ? 20 : 0,
      }}>
        <StatusBar backgroundColor="#4D2A88" barStyle="light-content" />
      </View>
      <AppNavigation/>
    </>
  )
}

export default App;
