import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { dsn } from './sentry.json';

import * as Sentry from '@sentry/react-native';

Sentry.init({ dsn });

const App = () => {

  return(
    <>
      <StatusBar backgroundColor="#422575" barStyle="light-content" />
      <AppNavigation/>
    </>
  )
}

export default App;
