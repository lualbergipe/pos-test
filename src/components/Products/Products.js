import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useTheme, Button, IconButton } from 'react-native-paper';
import { styles } from "./Products.Styles";
import ModalSpecifications from './ModalSpecifications';
import notFoundImage from '../../../assets/img/not-found.png';
import { useStore } from '../../state/ui/ui-store';
import Productgrid from './ProductsGrid';
import ProductList from './ProductList';

export function Products({ products, viewGrid, notFound, setSearch, search, setCategory, setDepartment, setBrand}) {
  const { colors } = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const orderFormCreated = useStore(state => state.orderForm);

  const returnproducts = () => {
    console.log('dsadsaadsadsasd');
    setSearch(''); 
    setCategory('&fq=productClusterIds:138'); 
    setDepartment(''); 
    setBrand('');
  }

  const renderProductItem = ({ item }) => {

    return (
      <View style={[ viewGrid === 1 ? styles.productItemContainer_list : styles.productItemContainer, { backgroundColor: viewGrid === 1 ? colors.background : colors.backgroundCard }]}>
        {
            viewGrid === 1 ? (
                <ProductList item={item} setSelectedProduct = {setSelectedProduct} setModalVisible={setModalVisible} orderFormCreated={orderFormCreated}/>
            ):(
                <Productgrid item={item} setSelectedProduct = {setSelectedProduct} setModalVisible={setModalVisible} orderFormCreated={orderFormCreated}/>
            )
        }
      {modalVisible && selectedProduct === item ? (
          <ModalSpecifications
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={item}
            setQuantity={(qty) => setQuantities((prev) => ({ ...prev, [item.productId]: qty }))}
            quantity={quantity}
          />
        ) : null}
      </View>
    );
  };

  if (notFound) {
    return (
      <View style={styles.container_error}>
        <Image style={styles.image_not_found} source={notFoundImage} />
        <Text style={[styles.error_text, { color: colors.text }]}>
          No se han encontrado resultados para {search}
        </Text>
        <Text style={[styles.error_text_subtitle, { color: colors.text }]}>
          Intenta ingresando otro término o puedes filtrar los productos en el botón de filtrar.
        </Text>
        <Button
          style={[styles.button_clear_search, { backgroundColor: colors.botonesFiltros }]}
          labelStyle={[styles.button_variation_Label, { color: colors.text }]}
          mode="contained"
          onPress={() => returnproducts()}>
          Ver los productos de la tienda
        </Button>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        key={viewGrid} // Cambia la llave para forzar re-renderizado
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.productId}
        numColumns={viewGrid}
        columnWrapperStyle={viewGrid > 1 ? styles.row : null} // Solo aplica estilos a filas si hay más de una columna
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}
