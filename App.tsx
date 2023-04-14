import * as React from 'react';
import { Provider } from "react-redux";
import store from "./src/store";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Basket, Favourites } from "./src/pages";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favourites" component={Favourites} />
          <Tab.Screen name="Basket" component={Basket} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
