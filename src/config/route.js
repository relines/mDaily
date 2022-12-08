import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home/index';
import Detail from '../screens/Detail/index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-analytics'
                : 'ios-analytics';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'md-calendar' : 'md-calendar';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
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
