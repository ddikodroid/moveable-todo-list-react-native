import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TodoScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'teal',
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
