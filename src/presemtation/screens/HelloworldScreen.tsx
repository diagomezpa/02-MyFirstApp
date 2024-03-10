/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
export const HelloworldScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HelloworldScreen</Text>
    </View>
  );
};
