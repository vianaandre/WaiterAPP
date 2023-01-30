import { useFonts } from 'expo-font';
import { Main } from './src/screens/Main';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  const [ isFontsLoaded ] = useFonts({
    'GeneralSans-400': require('./src/common/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-500': require('./src/common/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-600': require('./src/common/assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Main />
    </React.Fragment>
  );
}
