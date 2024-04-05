/* eslint-disable prettier/prettier */
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {FlexDirectionScreen} from './src/presemtation/screens/FlexDirectionScreen';
import {HomeworkScreen} from './src/presemtation/screens/HomeworkScreen';
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
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
