import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TaskInput, TodoCard} from '../components';

export interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

const TodoScreen = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onAddTask = () => {
    if (taskName === '') {
      return;
    }
    setTodos(prev => [
      ...prev,
      {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        name: taskName,
        completed: false,
      },
    ]);
    setTaskName('');
  };

  const onDeleteTask = ({id}: {id: ITodo['id']}) => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  };

  const onMoveTask = ({
    index,
    direction,
  }: {
    index: number;
    direction: 'up' | 'down';
  }) => {
    let newTodos = [...todos];
    if (direction === 'up') {
      if (index !== 0) {
        [newTodos[index], newTodos[index - 1]] = [
          newTodos[index - 1],
          newTodos[index],
        ];
      }
    } else if (direction === 'down') {
      if (index !== todos.length - 1) {
        [newTodos[index + 1], newTodos[index]] = [
          newTodos[index],
          newTodos[index + 1],
        ];
      }
    }
    setTodos(newTodos);
  };

  const onCompletedTask = ({id}: {id: ITodo['id']}) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : {...todo},
    );
    setTodos(newTodos);
  };

  const renderTodoCard = ({item, index}: {item: ITodo; index: number}) => {
    return (
      <TodoCard
        {...item}
        onDelete={() => onDeleteTask({id: item.id})}
        onCompleted={() => onCompletedTask({id: item.id})}
        onMoveUp={() => onMoveTask({index, direction: 'up'})}
        onMoveDown={() => onMoveTask({index, direction: 'down'})}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TaskInput
        value={taskName}
        onChangeText={text => setTaskName(text)}
        onAdd={onAddTask}
      />
      <FlatList data={todos} renderItem={renderTodoCard} style={styles.list} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    fontSize: 24,
    color: 'teal',
    marginBottom: 8,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  list: {
    marginHorizontal: 16,
  },
});
