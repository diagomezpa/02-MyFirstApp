/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

interface Props {
  name?: string;
}

export const HelloworldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
        Hello , {name}
      </Text>
    </View>
  );
};
