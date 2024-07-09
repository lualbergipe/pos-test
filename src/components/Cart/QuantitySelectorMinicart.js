import React, {useState, useEffect} from 'react';
import { useTheme ,IconButton  } from 'react-native-paper';
import { Alert, Text, View, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import { styles } from "./minicart.styles";
import { updateCart } from '../../api/cart';
export function QuantitySelectorMinicart(props)  {
    const incrementQuantity = () => {
        setQuantity(prev => prev + 1)
    };
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const [quantity, setQuantity] = useState(1);
    const { colors } = useTheme(); 
    //console.log("ESTA ES LA POSICION:" ,props.idPosicion)
return (
<View style={styles.quantitySelector}>
    <IconButton
    icon="minus"
    size={20}
    labelStyle={styles.button_quantitySelector_Label}
    onPress={decrementQuantity}
    style={[styles.quantityButton, {backgroundColor: colors.btnSecondary}]}
    />
    <Text style={[styles.quantityText, {color: colors.text}]}>{quantity}</Text>
    <IconButton
    icon="plus"
    labelStyle={styles.button_quantitySelector_Label}
    size={20}
    onPress={incrementQuantity}
    style={[styles.quantityButton, {backgroundColor: colors.btnSecondary}]}
    />
</View>  
)

}