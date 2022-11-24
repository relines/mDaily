import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  Alert,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

function Home(props) {
  const {navigation} = props;

  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count2" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16}}>这是首页</Text>
      <Text>Count: {count}</Text>
      <StatusBar
        backgroundColor="blue"
        hidden={false}
        barStyle="dark-content"
      />
      <Button
        title="123"
        color="#f00"
        onPress={() =>
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
      />
      <View style={styles.imgView}>
        <Image style={styles.img} source={require('./test.png')} />
      </View>
      <Text style={styles.title}>React Native</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='请输入'
          multiline={true}
          onChangeText={text => setValue(text)}
          value={value}
        />
        <Button title="btn" onPress={()=>Alert.alert(value)}></Button>
      </View>

      <View style={styles.content}>
        <View style={styles.itemBase}>
          <Text>扫一扫</Text>
        </View>
        <View style={styles.itemBase}>
          <Text>付款码</Text>
        </View>
        <View style={styles.itemBase}>
          <Text>卡包</Text>
        </View>
        <View style={styles.itemBase}>
          <Text onPress={() => Alert.alert('let us go')}>出行</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#f00',
    borderWidth: 1,
  },
  title: {
    marginTop: 32,
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
  content: {
    flexDirection: 'row',
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: Dimensions.get('window').width / 4,
    height: 90,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  imgView: {
    borderWidth: 1,
    borderColor: '#090',
  },
  img: {
    width: Dimensions.get('window').width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#909',
  },
  inputBtn: {
    color: '#ff0'
  }
});

export default Home;
