import LoginNavigator from "./LoginNavigator";
import {useContext} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppContext} from "../AppContext";
import AuthenticatedNavigator from "./AuthenticatedNavigator";


const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [appContextState, setAppContextState] = useContext(AppContext);
  return (
      <Stack.Navigator>
        {
          (appContextState.state == 'login') ?
            <Stack.Screen name={'LoginNavigator'} component={LoginNavigator}></Stack.Screen> :
            <Stack.Screen name={'AuthenticatedNavigator'} component={AuthenticatedNavigator}></Stack.Screen>
        }
      </Stack.Navigator>
  );
}

export default RootNavigator;
