import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function Home(props) {
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
    <View style={styles.container}>
      <Text style={{fontSize: 36}}>这是首页</Text>
      <Text style={styles.title}>React Native</Text>
      <Text>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    color: '#f00'
  }
});

export default Home;
