/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
    //alignItems: 'center',
    //flexDirection: 'row',
  },
  box: {
    //width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    flex: 2,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 2,
    //alignSelf: 'flex-end',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    flex: 4,
  },
});
