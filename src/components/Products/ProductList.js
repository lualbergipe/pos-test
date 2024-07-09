import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "./Products.Styles";
import { useNavigation } from '@react-navigation/native';
import { AddCart } from '../Cart/AddCart';
import { useTheme, Button, IconButton } from 'react-native-paper';



const ProductList = (props) => {
  const {item, setSelectedProduct, setModalVisible, orderFormCreated} = props
  const navigation = useNavigation();
  const { colors } = useTheme();

return(
        <TouchableOpacity
            style={styles.container_product_list}
            onPress={() => navigation.navigate('pdp', { producto: item })}>
            
            <View style={styles.productItem_list}>
                <View style={styles.firstColumn}>
                    <Image
                    style={styles.productImage_list}
                    source={{ uri: item.items[0].images[0].imageUrl }}
                    />
                </View>
                <View>
                <View style={styles.productDetails_list}>
                    <Text style={[styles.productTitle, { color: colors.text }]}>{item.productName}</Text>
                    <Text style={[styles.productSku, { color: colors.skuCard }]}>{item.productReference}</Text>
                </View>
                <View style={styles.priceColumn}>
                    <Text style={[styles.productPrice, { color: colors.text }]}>${item.price}</Text>
                    <Text style={[styles.priceWithoutDiscount]}>${item.price}</Text>
                </View>
                </View>
            </View>
            <View style={styles.AddCart_list}>
                {item.items[0].variations?.length > 0 ? (
                <TouchableOpacity
                style={[styles.button_icon, { backgroundColor: colors.primarySeewt }]}
                labelStyle={[styles.button_variation_Label, { fontSize: 16, color: colors.textBlack }]}
                onPress={() => {
                    setSelectedProduct(item);
                    setModalVisible(true);
                }}>
                <Text style={styles.buttonText}>...</Text>
                </TouchableOpacity>
            ) : (
                <>
            <AddCart text="icon" orderFormID={orderFormCreated.orderFormId} quantity={1} productID ={item.items?.[0]?.itemId} />
                </>
            )}
                </View>
      </TouchableOpacity>
)
}
export default ProductList