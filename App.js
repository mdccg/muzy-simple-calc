import { NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_900Black, useFonts } from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import CaloriasScreen from './screens/CaloriasScreen';
import HomeScreen from './screens/HomeScreen';
import TmbScreen from './screens/TmbScreen';
import { ThemeProvider } from 'styled-components';
import Theme from './stylesheets/theme';

const Stack = createNativeStackNavigator();

const options = {
  // Desabilitando o cabeçalho padrõo
  header: () => <></>
};

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <View style={{ height: Constants.statusBarHeight }} />

      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen options={options} name="HomeScreen" component={HomeScreen} />
              <Stack.Screen options={options} name="TmbScreen" component={TmbScreen} />
              <Stack.Screen options={options} name="CaloriasScreen" component={CaloriasScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
