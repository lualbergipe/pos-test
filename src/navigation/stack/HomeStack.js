import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/Home/HomeScreen/HomeScreen";
import { DetailProductScreen } from "../../screens/Home/HomeScreen/stacks/pdp/DetailProductScreen";
//import { screensName } from "../../utils/";

const Stack = createNativeStackNavigator();
export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='pdp' component={DetailProductScreen} />
    </Stack.Navigator>
  );
}