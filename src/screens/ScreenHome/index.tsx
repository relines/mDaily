import React from 'react';
import {View, Text, Button} from 'react-native';

const ScreenHome = props => {
  const {navigation} = props;
  return (
    <View>
      <Text style={{fontSize: 36}}>home Page</Text>
      <Button
        title="goSomePage"
        // 路由跳转
        onPress={() => navigation.navigate('ScreenSome',{
          id: 1,
          desc: 'this is a message'
        })}
      />
    </View>
  );
};

export default ScreenHome;
