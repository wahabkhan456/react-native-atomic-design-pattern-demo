import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import Home from 'app/screens/Home';
import CustomerDetails from 'app/screens/CustomerDetails';

const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Fragment>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: null,
              title: 'Customers',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="customerDetails"
            component={CustomerDetails}
            options={{
            
              title: 'Customer Details',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
