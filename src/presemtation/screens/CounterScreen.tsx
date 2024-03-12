/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(12);
  const incrementBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count} </Text>

      {/* <PrimaryButton
        label="counter"
        onPress={() => incrementBy(+1)}
        onLonPress={() => setCount(0)}></PrimaryButton> */}
      {/* <Pressable
        onPress={() => incrementBy(+1)}
        onLongPress={() => setCount(0)}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={{color: 'white'}}>+1</Text>
      </Pressable> */}

      <Button
        mode="contained"
        onPress={() => incrementBy(+1)}
        onLongPress={() => setCount(0)}>
        Incrementar
      </Button>
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
