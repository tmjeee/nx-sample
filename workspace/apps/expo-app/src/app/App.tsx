import "react-native-gesture-handler";

/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import {AppContext, AppContextState, InitialAppContextState} from "./AppContext";
import {Provider} from 'react-redux';
import store from './store/Store';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {logon} from "./store/reducers/AuthReducers";



export const App = () => {
  const [appContextState, setAppContextState] = useState<AppContextState>(InitialAppContextState);

  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  // const Drawer = createDrawerNavigator();

  // store.dispatch(logon());

  return (
    <Provider store={store}>
      <AppContext.Provider value={[appContextState, setAppContextState]}>
        <NavigationContainer>
          <RootNavigator></RootNavigator>
        </NavigationContainer>
      </AppContext.Provider>
    </Provider>
  );
};
const styles = StyleSheet.create({
});

export {
  AppContext
};
export default App;

