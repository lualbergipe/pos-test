import React, {useEffect, useState} from 'react';
import { useTheme ,IconButton  } from 'react-native-paper';
import { infoCart } from '../../api/cart';
import { Alert, Text, View, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import { styles } from "./minicart.styles";
import { useStore } from '../../state/ui/ui-store';
import { ButtonPay } from './ButtonPay/ButtonPay';
import { QuantitySelectorMinicart } from './QuantitySelectorMinicart';

const Minicartitems = (props) => {
  const {idCarro} = props
    const { colors } = useTheme(); 
    const [orderform, setOrderform] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const reloadCart = useStore(state => state.reloadCart);
    const toggleReloadCart = useStore(state => state.toggleReloadCart);
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        orderformApi();
      }, [refresh, reloadCart])

      const orderformApi = async () => {
        const orderform = await infoCart(idCarro);
        setOrderform(orderform);
        toggleReloadCart()
        //console.log('PINTANDO ORDERFORM MINICART', orderform.items)
      }
      
      
return (
   <View style={styles.contentMinicart}>
            {
                orderform?.items && orderform.items.length > 0 ? orderform?.items?.map((item, index) => {
                      let priceProduct = item.price / 100;
                      let quantity = item.quantity
                      return(
                        <View key={index} style={styles.itemMinicart}>
                          <View style={styles.view1}>
                            <Image
                                style={styles.stretch}
                                source={{
                                  uri: item.imageUrl
                              }}
                              />
                              <Text style={styles.badgeQuantity}> {item.quantity} {index} </Text>
                          </View>  
                          <View style={styles.view2}>
                            <Text style={[styles.productCart, {color: colors.text}]}>{item.skuName}  </Text>
                            <QuantitySelectorMinicart idPosicion={index}/> 
                          </View>
                          <View style={styles.view3}>
                          <Text style={[styles.productCartPrice, {color: colors.text}]}>{priceProduct}  </Text>
                          </View>  
                        </View>
                        
                      )                           
                }):
                <View style={styles.carroVacio}>
                <Image 
                source={require('../../../assets/img/carro-vacio.png')}
                 />
                 <Text style={[styles.productCart, {color: colors.text}]}> Los productos que agregues, aparecerán acá listados. </Text>
                </View> 
           }
            {
               orderform?.items?.length > 0 &&
                <>
                <Text style={[styles.totalText, {color: colors.text}]}>TOTAL {orderform?.totalizers?.[0]?.value / 100}</Text>
                
                <ButtonPay idCarro={orderform}/>
                </>
            }
          </View>
)
}
export default Minicartitems