import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TaskInput} from '../components';

const TodoScreen = () => {
  const [taskName, setTaskName] = useState('');
  const onAddTask = () => {
    if (taskName === '') {
      return;
    }
    console.log('Task: ', taskName);
    setTaskName('');
  };
  return (
    <View>
      <Text style={styles.title}>Todo List</Text>
      <TaskInput
        value={taskName}
        onChangeText={text => setTaskName(text)}
        onAdd={onAddTask}
      />
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
