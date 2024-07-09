import React from 'react';
import { View, Text } from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';

import { styles } from "./Products.Styles";



const QuantitySelector = (props) =>  {
    const { colors } = useTheme();
    const {quantity, quantities, setQuantities, id} = props
    const incrementQuantity = () => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: (prevQuantities[id] || 1) + 1,
        }));
      };
    
      const decrementQuantity = () => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
      };
return (
    <View style={styles.quantitySelector}>
              <IconButton
                icon="minus"
                size={20}
                labelStyle={styles.button_quantitySelector_Label}
                onPress={() => decrementQuantity()}
                style={[styles.quantityButton, { backgroundColor: colors.btnSecoundary }]}
              />
              <Text style={styles.quantityText}>{quantity}</Text>
              <IconButton
                icon="plus"
                labelStyle={styles.button_quantitySelector_Label}
                size={20}
                onPress={() => incrementQuantity()}
                style={[styles.quantityButton, { backgroundColor: colors.btnSecoundary }]}
              />
            </View>
)
}
export default QuantitySelector;