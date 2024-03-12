/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(12);
  const incrementBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count} </Text>

      <Pressable
        onPress={() => incrementBy(+1)}
        onLongPress={() => setCount(0)}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={{color: 'white'}}>+1</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
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
