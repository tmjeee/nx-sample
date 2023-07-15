import {createDrawerNavigator, DrawerScreenProps} from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import {BottomTabScreenProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import {CompositeScreenProps} from "@react-navigation/native";

export type AuthenticatedNavigatorParamList = {
  ProfileScreen: undefined,
  HomeNavigator?: HomeNavigatorParamList,
}

export type HomeNavigatorParamList = {
  HomeScreen: undefined,
  NewsScreen: undefined,
}

export type ProfileScreenProps = DrawerScreenProps<AuthenticatedNavigatorParamList, 'ProfileScreen'>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParamList, 'HomeScreen'>,
  DrawerScreenProps<AuthenticatedNavigatorParamList, 'HomeNavigator'>
>;

export type NewsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParamList, 'NewsScreen'>,
  DrawerScreenProps<AuthenticatedNavigatorParamList, 'HomeNavigator'>
>;

const HomeNavigator = () => {
  const BottomTab = createBottomTabNavigator<HomeNavigatorParamList>();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={'HomeScreen'} component={HomeScreen}></BottomTab.Screen>
      <BottomTab.Screen name={'NewsScreen'} component={NewsScreen}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};


const AuthenticatedNavigator = () => {
  const Drawer = createDrawerNavigator<AuthenticatedNavigatorParamList>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'ProfileScreen'} component={ProfileScreen}></Drawer.Screen>
      <Drawer.Screen name={'HomeNavigator'} component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default AuthenticatedNavigator;
