/* eslint-disable prettier/prettier */
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FlexScreen} from './src/presemtation/screens/FlexScreen';
export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloworldScreen name="Diego Gomez" /> */}
        {/* <HelloworldScreen name="Diego Gomez" />
        <CounterScreen></CounterScreen> */}
        {/* <CounterM3Screen></CounterM3Screen> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        <FlexScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
