import React from 'react';
import {View, Text, Button} from 'react-native';

export default self => (
  <View>
    <Text style={{fontSize: 36}}>home Page</Text>
    <Button
      title="goSomePage"
      // 路由跳转
      onPress={() => self.navigation.navigate('ScreenSome')}
    />
  </View>
);
