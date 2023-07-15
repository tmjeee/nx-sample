import {Button, Text, View} from "react-native";
import {ProfileScreenProps} from "../navigators/AuthenticatedNavigator";
import {useContext, useState} from "react";
import {AppContext} from "../AppContext";


const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [appContextState, setAppContextState] = useContext(AppContext);

  const logout = () => {
    setAppContextState((prevAppContextState) => {
      return {
        ...prevAppContextState,
        state: 'login',
      }
    });
  }

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }

  const home = () => {
    // navigation.navigate({name: 'HomeNavigator', params: {}});
    navigation.navigate('HomeNavigator');
  }

  return (
    <>
      <View>
        <Text>Profile Screen</Text>
        <Button title={'Logout'} onPress={logout}></Button>
        <Button title={'Drawer'} onPress={toggleDrawer}></Button>
        <Button title={'Home'} onPress={home}></Button>
      </View>
    </>
  );
}

export default ProfileScreen;
