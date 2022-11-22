import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/index';
import Detail from '../screens/Detail/index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '时间轴',
            headerTitle: props => <Text>123</Text>,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            title: '日历',
            headerTitle: props => <Text>312</Text>,
            tabBarBadge: 1,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
