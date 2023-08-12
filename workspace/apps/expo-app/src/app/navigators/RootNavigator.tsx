import LoginNavigator from "./LoginNavigator";
import {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppContext} from "../AppContext";
import AuthenticatedNavigator from "./AuthenticatedNavigator";
import {useSelector} from "react-redux";
import {RootState} from "../store/Store";
import {NavStateReducerState} from "../store/reducers/NavStateReducers";
import {AuthReducerState} from "../store/reducers/AuthReducers";


const Stack = createNativeStackNavigator();
const screens = {
    'unauth-nav': <Stack.Screen name={'LoginNavigator'} component={LoginNavigator}></Stack.Screen>,
    'auth-nav': <Stack.Screen name={'AuthenticatedNavigator'} component={AuthenticatedNavigator}></Stack.Screen>,
};


const RootNavigator = () => {
  const navState = useSelector<RootState, NavStateReducerState>((state) => {
    const s = state.navState;
    return s;
  });
  const auth = useSelector<RootState, AuthReducerState>((state) => {
    const s = state.auth;
    return s;
  });
  const [appContextState, setAppContextState] = useContext(AppContext);
  // const screen = {
  //     'unauth-nav': <Stack.Screen name={'LoginNavigator'} component={LoginNavigator}></Stack.Screen>,
  //     'auth-nav': <Stack.Screen name={'AuthenticatedNavigator'} component={AuthenticatedNavigator}></Stack.Screen>,
  // }[navState.status];
  // const screen = {
  //     'login': <Stack.Screen name={'LoginNavigator'} component={LoginNavigator}></Stack.Screen>,
  //     'authenticated': <Stack.Screen name={'AuthenticatedNavigator'} component={AuthenticatedNavigator}></Stack.Screen>,
  // }[appContextState.state];
  const screen = screens[navState.status];
  return (
      <Stack.Navigator>
        {
            screen
        }
      </Stack.Navigator>
  );
}

export default RootNavigator;
