import "react-native-gesture-handler";

/* eslint-disable jsx-a11y/accessible-emoji */
import React, {createContext, SetStateAction, useRef, useState} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import RootNavigator from "./navigators/RootNavigator";
import {AppContext, AppContextState, InitialAppContextState} from "./AppContext";



export const App = () => {
  const [appContextState, setAppContextState] = useState<AppContextState>(InitialAppContextState);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <AppContext.Provider value={[appContextState, setAppContextState]}>
      <NavigationContainer>
        <RootNavigator></RootNavigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};
const styles = StyleSheet.create({
});

export {
  AppContext
};
export default App;

