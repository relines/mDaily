import ScreenHome from '../screens/ScreenHome/index';
import ScreenSome from '../screens/ScreenSome/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenSome" component={ScreenSome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
