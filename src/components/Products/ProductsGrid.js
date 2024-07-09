import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "./Products.Styles";
import { useNavigation } from '@react-navigation/native';
import { AddCart } from '../Cart/AddCart';
import { useTheme, Button, IconButton } from 'react-native-paper';



const Productgrid = (props) => {
  const {item, setSelectedProduct, setModalVisible, orderFormCreated} = props
  const navigation = useNavigation();
  const { colors } = useTheme();


return(
  <TouchableOpacity
            onPress={() => navigation.navigate('pdp', { producto: item })}>
            <View style={styles.productItem}>
                <View style={styles.AddCart}>
                {item.items[0].variations?.length > 0 ? (
                <TouchableOpacity
                style={[styles.button_icon, { backgroundColor: colors.primarySeewt }]}
                labelStyle={[styles.button_variation_Label, { fontSize: 16, color: colors.textBlack }]}
                onPress={() => {
                    setSelectedProduct(item);
                    setModalVisible(true);
                }}>
                <Text style={[styles.buttonText, {color: colors.text}]}>...</Text>
                </TouchableOpacity>
            ) : (
                <>
            <AddCart text="icon" orderFormID={orderFormCreated?.orderFormId} quantity={1} productID ={item.items?.[0]?.itemId} />
                </>
            )}
                </View>
            <View style={styles.firstColumn}>
                <Image
                style={styles.productImage}
                source={{ uri: item.items[0].images[0].imageUrl }}
                />
            </View>
            <View style={styles.productDetails}>
                <Text style={[styles.productTitle, { color: colors.text }]}>{item.productName}</Text>
                <Text style={[styles.productSku, { color: colors.skuCard }]}>{item.productReference}</Text>
                <Text style={[styles.productSku, { color: colors.skuCard }]}>{item.brand}</Text>
            </View>
            <View style={styles.priceColumn}>
                <Text style={[styles.productPrice, { color: colors.text }]}>${item.price}</Text>
                <Text style={[styles.priceWithoutDiscount]}>${item.price}</Text>
            </View>
            </View>
      </TouchableOpacity>
)
}
export default Productgrid