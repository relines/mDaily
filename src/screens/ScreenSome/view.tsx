import React from 'react';
import {View, Text, Button} from 'react-native';

export default self => (
  <View>
    <Text style={{fontSize: 36}}>some Page</Text>
    <Button
      title="goHomePage"
      // 路由跳转
      onPress={() => self.navigation.navigate('ScreenHome')}
    />
  </View>
);
