import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: '头条',
  },
  {
    id: '2',
    title: '军事',
  },
  {
    id: '3',
    title: '娱乐',
  },
  {
    id: '4',
    title: '财经',
  },
  {
    id: '5',
    title: '科技',
  },
  {
    id: '6',
    title: '娱乐',
  },
  {
    id: '7',
    title: '时尚',
  },
  {
    id: '8',
    title: '那啥',
  },
  {
    id: '9',
    title: '本地',
  },
  {
    id: '10',
    title: '新闻',
  },
  {
    id: '11',
    title: '疫情',
  },
  {
    id: '12',
    title: '世界杯',
  },
  {
    id: '13',
    title: '东风',
  },
];

const Detail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const Item = ({title}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        ListHeaderComponent={() => {
          return <Text style={styles.listHeaderText}>列表标题</Text>;
        }}
        ListFooterComponent={() => {
          return <Text style={styles.listFooterText}>没有更多了</Text>;
        }}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        initialNumToRender={4}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator}></View>;
        }}
        ListEmptyComponent={() => {
          return <Text style={styles.empty}>空空如也!</Text>;
        }}
        refreshing={loading}
        onRefresh={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
        // onEndReachedThreshold={0.01}
        // onEndReached={() => Alert.alert('到底啦')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  listHeaderText: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  listFooterText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  itemSeparator: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginRight: 20,
    height: 1,
    backgroundColor: '#f00',
  },
  empty: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default Detail;
