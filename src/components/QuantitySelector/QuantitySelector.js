
import React, {useState} from 'react'
import { Text, View } from 'react-native'
import { IconButton, useTheme } from 'react-native-paper'
import { styles } from "./QuantitySelector.Styles";

const QuantitySelector = (props) => {
    const {setCantidad} = props
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const { colors } = useTheme();

  return (
    <View style={styles.quantitySelector}>
            <IconButton
            icon="minus"
            size={30}
            iconColor={colors.text}
            onPress={decrementQuantity}
            style={[styles.quantityButton, {backgroundColor: colors.btnSecoundary}]}
            />
            <Text style={[styles.quantityText, {color: colors.text}]}>{quantity}</Text>
            <IconButton
            icon="plus"
            iconColor={colors.text}
            size={30}
            onPress={incrementQuantity}
            style={[styles.quantityButton, {backgroundColor: colors.btnSecoundary}]}
            />
          </View>  
  )
}

export default QuantitySelector
