import {Button, Text, View} from "react-native";
import {PasswordScreenProps} from "../navigators/LoginNavigator";
import {useContext} from "react";
import {AppContext} from "../AppContext";

const PasswordScreen = ({route, navigation}: PasswordScreenProps) => {
  const [appContextState, setAppContextState] = useContext(AppContext);
  const onLogin = () => {
    //
    setAppContextState((prevAppContextState) => {
      return {
        ...prevAppContextState,
        state: 'authenticated',
      }
    });
  }
  return (
      <View>
        <Text>Password Screen</Text>
        <Button title={'Login'} onPress={onLogin}></Button>
      </View>
  );
}

export default PasswordScreen;
