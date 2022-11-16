import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenHome = props => {
  const {navigation, route} = props;
  console.log(333, route)
  return (
    <View>
      <Text style={{fontSize: 36}}>some Page</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.desc}</Text>
      <Button
        title="goHomePage"
        // 路由跳转
        onPress={() => navigation.navigate('ScreenHome')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScreenHome;
