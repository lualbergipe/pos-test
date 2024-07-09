import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigation } from "./DrawerNavigation";
//import { screensName } from "../utils";
const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}