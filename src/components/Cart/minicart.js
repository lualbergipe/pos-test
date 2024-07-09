import React, {useState, useEffect} from 'react';
import { Alert, Text, View, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import { styles } from "./minicart.styles";
import { infoCart, clearCart } from '../../api/cart';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Minicartitems from './MinicartItems';
import { IconButton, useTheme } from 'react-native-paper';
import { useStore } from '../../state/ui/ui-store';


export function Minicart(props) {
    const { idCarro } = props
    const [refresh, setRefresh] = useState(false)
    const [modalMinicartVisible, setModalMinicartVisible] = useState(false);
    const { colors } = useTheme(); 
    const isTablet = useStore((state) => state.isTablet);

    const limpiarCarro = () => {
      borrarCarro();
      Alert.alert('CARRO BORRADO', `Borrado` , [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
        setRefresh(!refresh)
    };
    const borrarCarro = async () => {
      const orderform = await clearCart(idCarro);
      console.log('INFO ORDERFORM BORRADO', orderform)
      setRefresh(!refresh)
    }

return(
    <View style={styles.buttonMinicart}>
        <TouchableOpacity style={[styles.containericonCart, {backgroundColor: colors.primary}]} onPress={() => setModalMinicartVisible(true)}>
         <IconButton
          icon="cart-plus"
          iconColor='#000000'
          size={25}
         />
        </TouchableOpacity>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalMinicartVisible}
        onRequestClose={() => setModalMinicartVisible(false)}
      >
         <View style={styles.modalContainer}>
         <View style={[styles.modalContent, {width: isTablet ? '30%' : '100%',}]}>
         <Text style={[styles.title__Product, { color: colors.text }]}> Carrito</Text>
         <TouchableOpacity onPress={() => setModalMinicartVisible(false)}>
              <Text style={styles.closeButton}>Cerrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => limpiarCarro()}>
            <Image 
            source={require('../../../assets/img/borrar-carro.png')}
        />
            </TouchableOpacity>
        <Minicartitems idCarro={idCarro}/>
        </View>
        </View>
      </Modal>  
            
    </View>
)
}