import {Text, View} from "react-native";
import {NewsScreenProps} from "../navigators/AuthenticatedNavigator";


const NewsScreen = ({navigation}: NewsScreenProps) => {
  return (
    <>
      <View>
        <Text>Home screen</Text>
      </View>
    </>
  );
}

export default NewsScreen;
