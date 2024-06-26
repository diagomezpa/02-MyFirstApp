/* eslint-disable prettier/prettier */

import {useState} from 'react';
import {Text, View} from 'react-native';

import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.style';

export const CounterM3Screen = () => {
  const [count, setCount] = useState<number>(12);
  const incrementBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count} </Text>
      {/* <Icon name="accessibility-outline" size={25} /> */}
      <FAB
        onPress={() => incrementBy(+1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon="add-outline"
      />
    </View>
  );
};
