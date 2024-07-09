import React, {useState, useEffect} from 'react';
import {  View, Image, Modal, Text, TouchableOpacity, TextInput} from 'react-native';
import { styles } from "./sharecart.styles";
import QRCode from 'react-native-qrcode-svg';
import close from '../../../assets/img/CerrarShare.png'
import share from '../../../assets/img/compartir.png'
import share_dark from '../../../assets/img/compartir_dark.png'
import { useStore } from '../../state/ui/ui-store';

export function ShareCart() {
    const orderFormCreated = useStore(state => state.orderForm);
    const [modalSharecartVisible, setModalSharecartVisible] = useState(false);
    const isDarkTheme = useStore(state => state.isDarkTheme);

    const [text, onChangeText] = React.useState('Introduce un nombre');
    const urlCart = `http://tmgrocery.myvtex.com/checkout/?orderFormId=${orderFormCreated?.orderFormId}`;
    return(
        <View>
            <TouchableOpacity style={styles.desplegable} onPress={() => setModalSharecartVisible(true)}>
                <Image 
                source={isDarkTheme ? share_dark : share}
                />
            </TouchableOpacity>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalSharecartVisible}
        onRequestClose={() => setModalSharecartVisible(false)}
      >
         <View style={styles.modalContainerShare}>
         <View style={styles.modalContentShare}>
            <View style={styles.encabezadoShare}>
            <Text style={styles.headerShare}>Compartir Carro </Text> 
            <TouchableOpacity onPress={() => setModalSharecartVisible(false)}  style={styles.imgCerrar} >
            <Image 
            source={close}
        />
            </TouchableOpacity>
            </View>
            <View  style={styles.zonaCampaign}>
                 <Text>Asociar carrito como campaña</Text>
                <View  style={styles.zonaFormulario}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TouchableOpacity style={styles.botonForm}> 
                    <Text>Asociar</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.filaBotones} >
                <TouchableOpacity style={styles.botonFormShare}>     
                    <Text>Compartir por Whatsapp</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.botonFormShare}>     
                <Text>Copiar Enlace</Text>
                </TouchableOpacity>   
                </View>

            </View>
            <View  style={styles.zonaQR}>
            <Image 
            source={require('../../../assets/img/imgQR.png')}
            />
            <QRCode
                
                value={urlCart}
                size={300}
                backgroundColor="#D2FDF0"
                />
            </View>
         
           
          
            </View>
        </View>
      </Modal> 
      </View>

    )
}