import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {images} from '../assets';
import {ITodo} from '../screens/todo-screen';

interface ITodoCard extends ITodo {
  onCompleted: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}

const TodoCard = ({
  name,
  completed,
  onCompleted,
  onMoveUp,
  onMoveDown,
  onDelete,
}: ITodoCard) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Pressable
            onPress={onCompleted}
            style={[styles.checkBox, completed ? styles.checked : null]}>
            <Image source={images.check} style={styles.checkIcon} />
          </Pressable>
          <Text style={[styles.name, completed ? styles.completedTask : null]}>
            {name}
          </Text>
        </View>
        <Pressable style={styles.iconButton} onPress={onDelete}>
          <Image source={images.delete} style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.moveButtonContainer}>
        <Pressable style={styles.iconButton} onPress={onMoveUp}>
          <Image source={images.chevronUp} style={styles.icon} />
        </Pressable>
        <Pressable style={styles.iconButton} onPress={onMoveDown}>
          <Image source={images.chevronDown} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  innerContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    borderColor: 'teal',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    width: 15,
    height: 12.5,
  },
  checkBox: {
    width: 22,
    height: 22,
    marginEnd: 8,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'teal',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: 'teal',
  },
  name: {
    width: '85%',
    fontSize: 16,
    color: 'black',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  iconButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  icon: {
    width: 16,
    height: 16,
  },
  moveButtonContainer: {
    marginStart: 8,
    justifyContent: 'space-between',
  },
});
