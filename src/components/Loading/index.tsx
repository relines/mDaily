import React, {useState} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.loading]}>
        <ActivityIndicator color="white" />
        <Text style={[styles.loadingText]}>loading</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    backgroundColor: '#999',
    height: 100,
    width: 150,
    borderRadius: 20,
    padding: 20,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
});

export default Detail;
