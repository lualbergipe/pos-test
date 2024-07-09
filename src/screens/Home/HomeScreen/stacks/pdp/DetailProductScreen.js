import { View, Text, Image,TouchableOpacity, Modal, SafeAreaView, ScrollView} from "react-native";
import { styles } from "./PDP.Styles";
import {  useTheme ,IconButton  } from "react-native-paper";
import React, { useState, useEffect } from 'react';
import { createCart } from '../../../../../api/cart';
import { ListInventory } from '../../../../../components/PDP/Inventory/ListInventory';
import { Minicart } from '../../../../../components/Cart/minicart';
import { AddCart } from "../../../../../components/Cart/AddCart";
import { Carrusel } from "../../../../../components/PDP/Carousel/Carousel";
import SpecificationsList from "../../../../../components/Products/SpecificationsList";
import { useStore } from "../../../../../state/ui/ui-store";
import { useNavigation } from '@react-navigation/native';
import back from '../../../../../../assets/img/button_back_light.png';
import minus from '../../../../../../assets/img/button_minus_light.png';
import plus from '../../../../../../assets/img/button_plus_light.png';
import QuantitySelector from "../../../../../components/QuantitySelector/QuantitySelector";


export function DetailProductScreen(props) {
  const {producto} = props.route.params
  const { colors } = useTheme(); 
  const [modalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [modalDisponibilidadVisible, setModalDisponibilidadVisible] = useState(false);
  const [modalMetodosVisible, setModalMetodosVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const [cart, setCart] = useState(null);
  const [contentValues, setContentValues] = useState([]);
  const [contentData, setContentData] = useState({});
  const [productName, setProductName] = useState(null);
  const [imageCar, setImageCar] = useState('https://cdn.alkst.co/tc9a34c6e/img/474xt_gteu84_feecef6e.webp');
  const [buttonColor, setButtonColor] = useState(styles.button);
  const [ContentVariations, setContentVariations] = useState([]);
  const [ContentVariationsData, setContentVariationsData] = useState({});
  const [itemSelected, setItemSelected] = useState(0);
  const width1 = '500';
  const [itemCompleterSelected, setItemCompleteSelected] = useState({});
  const orderFormCreated = useStore(state => state.orderForm);
  const navigation = useNavigation();
  const isDarkTheme = useStore(state => state.isDarkTheme);
  const [cantidad, setCantidad] = useState(1)

 

 // USE EFFECT PARA DESCRIPTION Y SPECIFICACIONES DE LOS PRODUCTOS
  useEffect(() => {
    // Leer los valores dentro de "Content"
    const contentValues = producto['Content'];
    setContentValues(contentValues);
    const contentData = {};
    //VAMOS A REGISTRAR AQUI LA INFO DEL PRIMER ITEM PARA EL PRIMER PRODUCTO SELECCIONADO
   
    const productName = producto.productName
    const ContentVariations = producto.items[0]['variations'];
    setContentValues(contentValues);
    setProductName(productName)
    setContentVariations(ContentVariations)
    const ContentVariationsData = {};

    contentValues?.forEach(value => {
      contentData[value] = producto[value][0]; // Se asume que solo hay un valor para cada clave
    });
    // Actualizar el estado con los datos de "Content"
    setContentData(contentData);

    ContentVariations?.forEach(value => {
      ContentVariationsData[value] = producto.items[0][value][0]; // Se asume que solo hay un valor para cada clave
    });
    // Actualizar el estado con los datos de "Content"
    setContentVariationsData(ContentVariationsData);

  }, []);

// PRUEBAS PARA CAMBIO DE COLOR AL PRESIONAR UN BOTON
  const handlePress = () => {
    setButtonColor(styles.buttonPressed);
  };

// FUNCION PARA ASIGNAR UN SKU
const ChangeIDSku = (valor) => {
  setItemSelected(valor);
};  

  console.log('INFO PRODUCTO',producto)
  console.log('INFO PRIMER SKU',producto.items[0])
  //console.log('producto.skuSpecifications', producto.skuSpecifications[0])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
      <View style={[{ backgroundColor: colors.background, padding: 20 }]}>
      <View style={styles.headerPdp}>
      <TouchableOpacity
        title="Go Back"
        onPress={() => navigation.goBack()}
      >
        <Image 
            source={isDarkTheme ? back : back}  
          />
       </TouchableOpacity>
       <View style={styles.filaInicial}>     
          <QuantitySelector setCantidad={setCantidad}/>
          <AddCart text={'tetx'} orderFormID={orderFormCreated?.orderFormId} quantity={cantidad} productID ={producto.items[itemSelected].itemId} />
        </View>  
     
      </View>
      <View style={[styles.containerProduct]}>
      <View style={styles.column}>
      {/* <Image
            style={styles.tinyLogo}
            source={{
                uri: producto.items[itemSelected].images[0].imageUrl
            }}
      /> */}
      <Carrusel parameter={producto.items[itemSelected].images[0].imageUrl} />

      </View>
      {/* Columna del texto */}
      <View style={styles.column}>
        
    
      <Text style={[styles.title__Product, { color: colors.textColor }]}> { productName }</Text>
      <Text style={[styles.paragraph, { color: colors.baseAuxiliar }]}> Product Reference: {  producto.productReference }</Text>
      <Text style={[styles.price__Product, { color: colors.text }]}>$ {  producto.price}</Text>
      
      {/* {
          producto.skuSpecifications ? producto.skuSpecifications.map((spec, index) => (
            <View key={index} style={styles.specContainer}>
                <Text style={styles.titleSpec}>{spec.field.name}</Text>
                <View style={styles.specification_values_container}>
                    {spec.values.map((value, valueIndex) => {
                      const isSelected = ContentVariationsData[spec.field.name] === value.name;
                        return(
                        <TouchableOpacity key={valueIndex} style={[styles.valueSpec,  isSelected && styles.BotonSelected]}>
                        <Text>{value.name}</Text>
                        </TouchableOpacity>
                        ) 

                    })}
                </View>
            </View>
        )):
        <Text>Ups... Al parecer el producto no tiene especificaciones</Text>
      } */}
       <View style={styles.specContainer}>
          <View style={styles.specification_values_container}>
          {
            producto.items && producto.items.length > 1 ?
            <SpecificationsList data={producto} setItemSelected={setItemSelected} setItemCompleteSelected={setItemCompleteSelected} alto={200}/>
            :
            <></>

          }
          {/* {
              producto.items && producto.items.length > 1 ? producto?.items?.map((item, index) => {
                    const isSelected = index === itemSelected;
                          return(
                          <TouchableOpacity key={index} style={[styles.valueSpec,  isSelected && styles.BotonSelected]} onPress={() => ChangeIDSku(index)}>
                            <Text>{item.name} {index} </Text>
                            </TouchableOpacity>
                          )                           
                    }):
            <Text>Ups... Al parecer el producto no tiene variaciones</Text>
          } */}
          </View>
       </View>

          <TouchableOpacity style={styles.desplegable} onPress={() => setModalDescriptionVisible(true)}>
          <Text style={[styles.desplegableTexto, {color: colors.text}]}>Descripcion del Producto</Text>
          <View style={[styles.containerAccordion, {backgroundColor: colors.bgTertiary}]}>
          <IconButton
           icon="chevron-right"
           iconColor={colors.text}
           size={20}
          />
          </View>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.desplegable} onPress={() => setModalDisponibilidadVisible(true)}>
          <Text style={[styles.desplegableTexto, {color: colors.text}]}>Disponibilidad en otras tiendas</Text>
          <View style={[styles.containerAccordion, {backgroundColor: colors.bgTertiary}]}>
          <IconButton
           icon="chevron-right"
           iconColor={colors.text}
           size={20}
          />
          </View>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.desplegable} onPress={() => setModalMetodosVisible(true)}>
          <Text style={[styles.desplegableTexto, {color: colors.text}]}>Metodos de entrega</Text>
          <View style={[styles.containerAccordion, {backgroundColor: colors.bgTertiary}]}>
          <IconButton
           icon="chevron-right"
           iconColor={colors.text}
           size={20}
          />
          </View>
          </TouchableOpacity> 
    
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalDescriptionVisible}
        onRequestClose={() => setModalDescriptionVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Contenido de la ventana modal */}
            <Text style={[styles.title__Product, { color: colors.text }]}> Descripcion del producto</Text>
            <Text style={[styles.descriptionText, { color: colors.text }]}>{ producto.description}</Text>
            {contentValues?.map((value, index) => (
              <Text key={index}>{value}: {contentData[value]}</Text>
          ))}
            {
         
         producto.allSpecifications ? producto.allSpecifications?.map((spec) => ( 
          <Text style={styles.titleSpec}>{spec}</Text>
         )):
        <></>
        }
            <TouchableOpacity onPress={() => setModalDescriptionVisible(false)}>
              <Text style={styles.closeButton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>  

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalDisponibilidadVisible}
        onRequestClose={() => setModalDisponibilidadVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Contenido de la ventana modal */}
            < ListInventory parameter={producto.items[0].itemId}/>
            <TouchableOpacity onPress={() => setModalDisponibilidadVisible(false)}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>  


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalMetodosVisible}
        onRequestClose={() => setModalMetodosVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Contenido de la ventana modal */}
            <Text style={[styles.title__Product, { color: colors.text }]}> Metodos de entrega</Text>
            <Text style={[styles.descriptionText, { color: colors.text }]}>{ producto.description}</Text>
            <TouchableOpacity onPress={() => setModalMetodosVisible(false)}>
              <Text style={styles.closeButton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>  
      </View>
     
     

    </View>
   
    </View>
   
    </ScrollView>
    <Minicart parameter={orderFormCreated?.orderFormId}/>
    </SafeAreaView>
  );
}



