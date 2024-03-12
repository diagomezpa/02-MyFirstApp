import {SafeAreaView} from 'react-native';
import {HelloworldScreen} from './src/presemtation/screens/HelloworldScreen';
import {CounterScreen} from './src/presemtation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presemtation/screens/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloworldScreen name="Diego Gomez" /> */}
        {/* <HelloworldScreen name="Diego Gomez" />
        <CounterScreen></CounterScreen> */}
        <CounterM3Screen></CounterM3Screen>
      </SafeAreaView>
    </PaperProvider>
  );
};
