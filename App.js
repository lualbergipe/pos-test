import { PaperProvider } from 'react-native-paper';
import { RootNavigation } from './src/navigation/RootNavigation';
import { darkTheme, lightTheme } from './src/Theme/Theme';
import { useStore } from './src/state/ui/ui-store';

export default function App() {
  const isDarkTheme = useStore(state => state.isDarkTheme);
  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <RootNavigation/>
    </PaperProvider>
  );
}
