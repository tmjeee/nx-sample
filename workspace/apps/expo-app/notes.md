
### Navigation
* navigation.navigate downwards, using navigator / screen name is ok
* navigation.navigate upwards, using screen name only

### XxxParamList
* One XxxParamList for each layer of navigators
* XxxParamList fields are screen or navigator names where navigator names are undefineable

### XxxScreenProps
* Each actual screen (not navigators) will have a XxxScreenProps of its own derivable from XxxParamList through react-navigation's XxxScreenProps<...>
* CompositeScreenProps 2nd parameterized variable is the immediate navigator

### Example

```
// need a DrawerNavigatorParamList
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator(...);
  return (
    <Drawer.Navigator>
       { 
          // Need a ProfileScreenProp derived from DrawerScreenProp<DrawerNavigatorParamList, 'ProfileScreen'>   
       }
       <Drawer.screen name={'ProfileScreen'} component={ProfileScren} ...></Drawer.screen> 
       
       {
          // Need a TabNavigatorParamList 
       } 
       <Drawer.screen name={'TabNavigator'} component={TabNavigator} ...></Drawer.screen> 
    </Drawer.Navigator>
  );
}

// need a TabNavigatorParamList
const TabNavigator = () => {
  Tab = createTabNavigator(...);
  return (
    {
      // Need a  Tab1ScreenProps derived from TabScreenProps<TabNavigatorParamList, 'Tab1Screen'>
    }
    <Tab.Screen component={Tab1Screen} ...></Tab.Screen>
    
    {
      // Need a StackNavigatorParamList 
    }
    <Tab.Screen compoennt={StackNavigator} ...></Tab.Screeen> 
  );
}


// XxxParamsList
export type DrawerNavigatorParamList = {
  ProfileScreen: undefined, // asssume no params settings
  TabNavigator: TabNavigatroParamsList,
}

export type TabNavigatorParamList = {
  Tab1Screen: undefined,
  StackNavigator: StackNavigatorParamList,
}

export type StackNavigatorParamList = {
  Stack1Screen: undefined,
  Stack2Screen: undefined,
}


// XxxScreenProps
export type ProfileScreenProps = DrawerScreenProps<DrawerNavigatorParamList, 'ProfileScreen'>;

export type Tab1ScreenProps = CompositeScreenProps<
  TabScreenProps<TabNavigatorParamsList, 'Tab1Screen'>,
  DrawerScreenProps<DrawerNavigtorParamList, 'TabNavigator'>  // immediate navigator
>;

export type Stack1ScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackNavigatorParamList, 'Stack1Screen'>,
  TabScreenProps<TabNavigatorParamsList, 'TabNavigator'>  // immediate navigator
>;

export type Stack2ScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackNavigatorParamList, 'Stack2Screen'>,
  TabScreenProps<TabNavigatorParamsList, 'TabNavigator'>  // immediate navigator
>; 

```
