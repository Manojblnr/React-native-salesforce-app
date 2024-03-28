import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store'

import LoginScreen from './src/screens/login-screen/login-screen';
import HomeScreen from './src/screens/home-screen/home-screen';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='LoginScreen' component={LoginScreen} />
              <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
  )
}

export default App;