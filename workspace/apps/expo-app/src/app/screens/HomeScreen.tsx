import {Button, Text, View} from "react-native";
import {HomeScreenProps} from "../navigators/AuthenticatedNavigator";


const HomeScreen = ({navigation}: HomeScreenProps) => {
  const profile = () => {
    navigation.navigate('ProfileScreen');
  }
  const x =  (
      <View>
        <Text>Home screen</Text>
        <Button title={'Profile'} onPress={profile}></Button>
      </View>
  );
  return x;
}

export default HomeScreen;
