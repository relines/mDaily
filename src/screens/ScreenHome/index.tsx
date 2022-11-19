import React, {useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';

const ScreenHome = props => {
  const {navigation} = props;
  const [count, setCount] = React.useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
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
          navigation.navigate('ScreenSome', {
            id: 1,
            desc: 'this is a message',
          })
        }
      />
    </View>
  );
};

export default ScreenHome;
