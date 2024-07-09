import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./Products.Styles";
import { IconButton, useTheme } from 'react-native-paper';
import { Modal, TouchableWithoutFeedback} from 'react-native';
import SpecificationsList from './SpecificationsList';
import { AddCart } from '../Cart/AddCart';
import { useStore } from '../../state/ui/ui-store';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import close from '../../../assets/img/button_close_light.png'

const ModalSpecifications = (props) => {
    const { colors } = useTheme();
    const { modalVisible, setModalVisible, data} = props;
    const [itemSelected, setItemSelected] = useState(0);
    const [itemCompleterSelected, setItemCompleteSelected] = useState({});
    const orderFormCreated = useStore(state => state.orderForm);
    const [cantidad, setCantidad] = useState(1)
    const closeModal = () => {
      setModalVisible(!modalVisible)
  }
  console.log(itemCompleterSelected.length);
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
            <View style={[styles.modalContent, {backgroundColor: colors.background}]}>
                      <View style={styles.title__container}>
                        <View style={styles.title_conten}>
                        <TouchableOpacity onPress={() => closeModal()} style={styles.closeButton}>
                          <Image source={close} alt='cerrar'/>
                        </TouchableOpacity>
                        <Text style={[styles.title__Product, { color: colors.text }]}>Más opciones de producto</Text>
                        </View>
                        <View style={styles.actions_conten}>
                          <QuantitySelector setCantidad={setCantidad}/>
                          <AddCart text="text" orderFormID={orderFormCreated.orderFormId} quantity={cantidad} productID ={itemCompleterSelected?.[0]?.itemId} />
                        </View>
                      </View>
                      <View style={styles.container_especificaciones}>
                        <View style={styles.content_spec}>
                          <View style={styles.content_name_sku}>
                          <Text style={[styles.text_product_espec, {color: colors.text}]}>{itemCompleterSelected.length > 0 ? itemCompleterSelected[0].nameComplete : data.productName }</Text>
                          <Text style={styles.text_product_sku}>{itemCompleterSelected.length > 0 ? `SKU: ${itemCompleterSelected[0].itemId}` : '' }</Text>

                          </View>
                          <SpecificationsList
                            data={data}
                            setItemSelected={setItemSelected}
                            setItemCompleteSelected={setItemCompleteSelected}
                          />
                        </View>
                      </View>
                  </View>
    </Modal>
  );
};

export default ModalSpecifications;
