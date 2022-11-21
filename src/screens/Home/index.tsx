import React, {useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen(props) {
  const {navigation} = props;

  const [count, setCount] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count2" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text style={{fontSize: 36}}>home Page</Text>
      <Text>Count: {count}</Text>
      <Button
        title="goSomePage"
        // 路由跳转
        onPress={() =>
          navigation.navigate('Detail', {
            id: 1,
            desc: 'this is a message',
          })
        }
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Home = props => {
  const {navigation} = props;

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Messages" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Home;
