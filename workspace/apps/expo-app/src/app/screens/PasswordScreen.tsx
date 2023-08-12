import {Button, Text, View} from "react-native";
import {PasswordScreenProps} from "../navigators/LoginNavigator";
import {useContext} from "react";
import {AppContext} from "../AppContext";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/Store";
import {logon, logon2} from "../store/reducers/AuthReducers";

const PasswordScreen = ({route, navigation}: PasswordScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [appContextState, setAppContextState] = useContext(AppContext);
  const onLogin = async () => {
    //
    // setAppContextState((prevAppContextState) => {
    //   return {
    //     ...prevAppContextState,
    //     state: 'authenticated',
    //   }
    // });
    // const r = await dispatch(logon({email: 'user1@gmail.com', password: 'password'}));
    // if (r.meta.requestStatus) {/* todo */}
    const r2 = await dispatch(logon2({email: 'user1@gmail.com', password: 'password'}));

  }
  return (
      <View>
        <Text>Password Screen</Text>
        <Button title={'Login'} onPress={onLogin}></Button>
      </View>
  );
}

export default PasswordScreen;
