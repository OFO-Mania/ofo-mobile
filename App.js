import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {

  return(
    <>
      <StatusBar backgroundColor="#422575" barStyle="light-content" />
      <AppNavigation/>
    </>
  )
}

export default App;