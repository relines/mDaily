import ScreenHome from '../screens/ScreenHome/index';
import ScreenSome from '../screens/ScreenSome/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="ScreenHome"
          component={ScreenHome}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="ScreenSome"
          component={ScreenSome}
          options={{
            title: 'some',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#009',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
