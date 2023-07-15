import {Button, GestureResponderEvent, Text, View} from "react-native";
import {LoginScreenProps} from "../navigators/LoginNavigator";


export const LoginScreen = ({route, navigation}: LoginScreenProps) => {
  const onContinue = (e: GestureResponderEvent) => {
    // todo:
    navigation.navigate('PasswordScreen');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title={'Continue'} onPress={onContinue}></Button>
    </View>
  );
}

export default LoginScreen;
