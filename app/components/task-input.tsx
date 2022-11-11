import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';

interface ITaskInputProps extends TextInputProps {
  onAdd: () => void;
}

const TaskInput = ({onAdd, ...textInputProps}: ITaskInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput {...textInputProps} style={styles.textInput} />
      <Pressable
        onPress={onAdd}
        style={({pressed}) => [styles.addButton, {opacity: pressed ? 0.6 : 1}]}>
        <Text style={styles.addText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'teal',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
  },
  addButton: {
    width: 48,
    marginStart: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
  addText: {
    fontSize: 14,
    color: 'white',
  },
});
