import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/index';
import Detail from '../screens/Detail/index';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Detail" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
