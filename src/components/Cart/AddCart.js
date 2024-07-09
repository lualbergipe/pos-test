import React, {useState, useEffect} from 'react';
import { IconButton, useTheme } from "react-native-paper";
import { Text, View, TouchableOpacity, Alert} from 'react-native';
import { styles } from "./addcart.styles";
import { addToCart } from '../../api/cart';
import { useStore } from '../../state/ui/ui-store';
import DynamicAlert from '../Alerts/DynamicAlert';


export function AddCart(props) {
    const {productID, quantity, orderFormID, text} = props
    const { colors } = useTheme(); 
    const [carro, setCarro] = useState(null)
    const [alertParams, setAlertParams] = useState({
      show: false,
      type: '',
      message: '',
    });
    const AddCartApi = async () => {
      console.log(orderFormID, productID, quantity);
      const carro= await addToCart(orderFormID, productID, quantity);
      setCarro(carro);
      //console.log('INFO ACTUALIZADA CARRO', carro)
    }
    // PRUEBAS PARA CAMBIO DE COLOR AL PRESIONAR UN BOTON
  const handlePress = () => {
    AddCartApi();
    showAlert('success', `ID PRODUCTO: ${productID}`);
  };
  const showAlert = (type, message) => {
    setAlertParams({ show: true, type, message });
  };

return(
  <>
        {
          text === 'icon' ? (
            <TouchableOpacity  onPress={() => handlePress()}  style={[styles.button_icon, { backgroundColor: colors.btnSecoundary }]}>
           <Text style={[styles.buttonText, {color: colors.text}]}>+</Text>
          </TouchableOpacity>
          ): (
          <TouchableOpacity  onPress={() => handlePress()}  style={[styles.button, { backgroundColor: colors.btnPrimary }]}>
           <Text style={styles.buttonText} >Agregar al carrito</Text>
           <IconButton
            icon="cart-plus"
            color={colors.text}
            size={20} // Cambia el tamaño del ícono aquí
          />
          </TouchableOpacity>
          )
        }
        <DynamicAlert
        show={alertParams.show}
        type={alertParams.type}
        message={alertParams.message}
        onClose={() => setAlertParams({ show: false, type: '', message: '' })}
      />
        </>
      )
    }