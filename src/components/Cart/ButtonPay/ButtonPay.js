import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, Modal, Image, View} from 'react-native';
import { styles } from "./buttonpay.styles";
import { useTheme ,IconButton  } from 'react-native-paper';
import close from '../../../../assets/img/card.png'
export function ButtonPay( idCarro)  {
  const TotalValue = (idCarro.idCarro?.totalizers?.[0]?.value / 100);
  //console.log('ID CARRO BUTTON PAY' , idCarro.idCarro?.totalizers?.[0]?.value / 100);
    //const { valorTotal } = idCarro.idCarro?.totalizers?.[0]?.value / 100;
    const { colors } = useTheme(); 
    const [modalPayVisible, setModalPayVisible] = useState(false);
    return(
        <>
        <TouchableOpacity  style={[styles.button, { backgroundColor: colors.btnPrimary }]} onPress={() => setModalPayVisible(true)}>
        <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalPayVisible}
        onRequestClose={() => setModalPayVisible(false)}
      >
          <View style={[styles.modalContainerPayment, {backgroundColor: colors.background}]}>
                  <View style={styles.cabeceraPayment}>
                  <TouchableOpacity onPress={() => setModalPayVisible(false)}  style={styles.imgCerrar} >
                      <Image 
                      source={require('../../../../assets/img/CerrarShare.png')}
                      />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button2}>
                        <Text>Agregar cupon de descuento</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button2}>
                        <Text>Agregar Cliente</Text>
                      </TouchableOpacity>
                  </View>
                <View style={styles.totalizer} >
                  <Text style={[styles.headerShare, {color: colors.text}]} >Total a Pagar ${TotalValue}</Text>
                </View>
                <View style={[styles.medioPago, styles.sombra]} >
                    <Image source={close} alt='cerrar'/>
                    <Text>Finalizar transaccion en CredibancoApp</Text>
                </View>
              </View> 
      </Modal>
      </>
    )
}