import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigation } from "./DrawerNavigation";
import { AuthScreen } from "../screens/Auth";
import { WellcomeScreen } from "../screens/Auth/AuthScreen/WellcomeScreen";
import { LoginScreen } from "../screens/Auth/AuthScreen/LoginScreen";
import { StoreScreen } from "../screens/Auth/AuthScreen/StoreScreen";
import AuthLogin from "../screens/Auth/AuthScreen/AuthLogin";
//import { screensName } from "../utils";
const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
     
        <Stack.Screen name='well' component={WellcomeScreen} />
        <Stack.Screen name='store' component={StoreScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='auth' component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}