import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderScreen } from "../../screens/Home/OrderScreen/orderScreen";
//import { screensName } from "../../utils/";

const Stack = createNativeStackNavigator();
export function OrderStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='orders' component={OrderScreen} />
    </Stack.Navigator>
  );
}