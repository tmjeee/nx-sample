import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import PasswordScreen from "../screens/PasswordScreen";

export type LoginNavigatorParamList = {
  LoginScreen: undefined,
  PasswordScreen: undefined,
}

export type LoginScreenProps = NativeStackScreenProps<LoginNavigatorParamList, 'LoginScreen'>;
export type PasswordScreenProps = NativeStackScreenProps<LoginNavigatorParamList, 'PasswordScreen'>;


const LoginNavigator = () => {
  const Stack = createNativeStackNavigator<LoginNavigatorParamList>();
  return (
      <Stack.Navigator initialRouteName={'LoginScreen'}>
        <Stack.Screen name={'LoginScreen'} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={'PasswordScreen'} component={PasswordScreen}></Stack.Screen>
      </Stack.Navigator>
  );
}


export default LoginNavigator;
