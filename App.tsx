import {SafeAreaView} from 'react-native';
import {HelloworldScreen} from './src/presemtation/screens/HelloworldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HelloworldScreen />
    </SafeAreaView>
  );
};
