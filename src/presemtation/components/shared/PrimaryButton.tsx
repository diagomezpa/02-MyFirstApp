/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLonPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLonPress}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      onLongPress={() => {
        onLonPress && onLonPress();
      }}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={{color: 'white'}}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
