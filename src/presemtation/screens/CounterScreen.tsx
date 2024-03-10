/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

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
        onLongPress={() => setCount(0)}>
        <Text>+1</Text>
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
});
