import { View, Text } from "react-native";
import { styles } from "./OrderScreen.Styles";

export function OrderScreen() {
  //const [showLogin, setShowLogin] = useState(true);

  //const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <Text>Hola desde las ordenes</Text>
    </View>
  );
}