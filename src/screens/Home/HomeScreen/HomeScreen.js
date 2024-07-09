import React, {useEffect, useState, useRef} from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "./HomeScreen.Styles";
import {IconButton, useTheme } from "react-native-paper";
import { useStore } from '../../../state/ui/ui-store';
import { addToCart, clearCart, createCart } from '../../../api/cart';
import SearchProductsComponent from '../../../components/search/SearchProduct';
import { SearchProducts, getProductByCode, getProducts } from '../../../api/products';
import { Products } from '../../../components/Products/Products';
import { CodeScan } from '../../../components/Scan/CodeScan';
import { Minicart } from '../../../components/Cart/minicart';
import { Loader } from '../../../components/Loader/Loader';
import Minicartitems from '../../../components/Cart/MinicartItems';
import DynamicAlert from '../../../components/Alerts/DynamicAlert';
import Clients from '../../../components/Clients/Clients';
import Campaign from '../../../components/Campaign/Campaign';
import { Filters } from '../../../components/Filters/Filters';
import { ShareCart } from '../../../components/Cart/ShareCart';
import ProductList from '../../../components/Products/ProductList';
import background_filters from '../../../../assets/img/background-gradient_filters.png'


export function HomeScreen() {
  const { colors } = useTheme(); 
  const searchTimeout = useRef(null);
  const store = useStore(state => state.vendor);
  const orderFormCreated = useStore((state) => state.orderFormCreated);
  const [search, setSearch] = useState('');
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [codeScan, setCodeScan] = useState('');
  const [category, setCategory] = useState('&fq=productClusterIds:138');
  const [brand, setBrand] = useState('');
  const [department, setDepartment] = useState('');
  const [perPage, setPerPage] = useState(50);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(10)
  const [order, setOrder] = useState('');
  const [notFound, setNotFound] = useState(false)
  const [products, setProducts] = useState(null)
  const [viewGrid, setViewGrid] = useState(4)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalFilter, setmodalFilter] = useState(false)
  const [cart, setCart] = useState(null)
  const toggleReloadCart = useStore(state => state.toggleReloadCart);
  const [currentScreen, setCurrentScreen] = useState('products');
  const isTablet = useStore((state) => state.isTablet);
  const [alertParams, setAlertParams] = useState({
    show: false,
    type: '',
    message: '',
  });
 /*  const isTabletFunction = () => {
    const { width, height } = Dimensions.get('window');
    const aspectRatio = height / width;
    const tablet = width >= 768 && aspectRatio < 1.6
     setIsTablet(tablet); // Ajusta según tus necesidades
     setViewGrid(tablet === true ? 4 : 2)
    }; */

  const cartApi = async () => {
    setLoading(true)
    const cart = await createCart();
    setCart(cart)
    orderFormCreated(cart)
    setLoading(false)
  }

  useEffect(() => {
    cartApi()
    isTablet ? setViewGrid(4) : setViewGrid(2)
    productApi();
  }, [category])

  const productApi = async () => {
    const products = await getProducts(store);
    setProducts(products)
  }
  const handleSearch = (text) => {
      setCodeScan('')
      setSearch(text);
  };

  useEffect(() => {
    clearTimeout(searchTimeout.current);
    if (search.length >= 3 || search.length === 0 || codeScan > 0) {
      searchTimeout.current = setTimeout(() => {
        searchApi(search);
      }, 300);
    }
    return () => {
      clearTimeout(searchTimeout.current);
    };
  }, [search, page, order, category, department, brand]);
  const searchApi = async (searchTerm) => {
    setLoading(true)
    setNotFound(false)
    try {
      const dataSearch = await SearchProducts(store, searchTerm, codeScan, perPage, page, order, category, department, brand);
      setFilteredProducts(dataSearch);
      const filtered = dataSearch
        if(filtered.length === 0){
          setNotFound(true)
        }
      setTotalProducts(filtered.length)
      setProducts(filtered);
      setLoading(false)
    } catch (error) {
      console.error('Error al buscar productos:', error);
      setLoading(false)
      alert(error)
    }
  };
  const handleBarcodeScanned = async (type, data) => {
    setIsCameraVisible(false); 
    const skuItem = await getProductByCode(store, type.data)
    if (skuItem.length > 0 &&  skuItem[0].items) {
      const filterItemSku = skuItem[0].items.filter(sku => sku.itemId === type.data)
      await addToCart(cart?.orderFormId, filterItemSku[0].itemId, 1 )
      showAlert('success', `Producto agregado: ${filterItemSku[0].nameComplete}`);
    }else{
      showAlert('error', `Producto ${type.data} no encontrado`);
    }
  };
  const limpiarCarro = () => {
    borrarCarro();
   showAlert('success', 'Carrito borrado')
  };
  const borrarCarro = async () => {
    const orderform = await clearCart(cart?.orderFormId);
    toggleReloadCart()
    console.log('INFO ORDERFORM BORRADO', orderform)
  }
  const showAlert = (type, message) => {
    setAlertParams({ show: true, type, message });
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.container_Products, {width: isTablet ? '65%' : '100%'}]}>
      <SearchProductsComponent
      handleSearch={handleSearch} 
      search={search} 
      setSearch={setSearch} 
      setIsCameraVisible={setIsCameraVisible} 
      isCameraVisible={isCameraVisible}
      setCodeScan={setCodeScan}
      setCategory={setCategory}
      setDepartment={setDepartment}
      setBrand={setBrand}
      />
      {loading ? (
       <Loader/>
      ) : (
        <>
        <View style={styles.tabs_container}>
          <View style={ styles.tabs_screen}>
          <TouchableOpacity 
          style={[
            styles.tab_view, 
            {backgroundColor: currentScreen === 'products' ? colors.backgroundCard :colors.btnSecoundary, 
              borderTopLeftRadius: 10, 
              borderBottomLeftRadius: 10,
              borderWidth: currentScreen === 'products' ? 2 : 0,
              borderColor: currentScreen === 'products' ? colors.borderButoon : ''}]}
          onPress={() => setCurrentScreen('products')}>
            <Text style={[styles.text_button_tab, {color: colors.text}]}>Productos</Text>
          </TouchableOpacity>
          <TouchableOpacity  
          style={[
            styles.tab_view, {backgroundColor: currentScreen === 'clients' ? colors.backgroundCard :colors.btnSecoundary,
              borderWidth: currentScreen === 'clients' ? 2 : 0,
              borderColor: currentScreen === 'clients' ? colors.borderButoon : ''
            }]}
          onPress={() => setCurrentScreen('clients')}>
          <Text style={[styles.text_button_tab, {color: colors.text}]}>Clientes</Text>
          </TouchableOpacity>
          <TouchableOpacity  
          style={[
            styles.tab_view, {backgroundColor: currentScreen === 'campaign' ? colors.backgroundCard :colors.btnSecoundary, 
            borderTopRightRadius: 10, 
            borderBottomRightRadius: 10,
            borderWidth: currentScreen === 'campaign' ? 2 : 0,
            borderColor: currentScreen === 'campaign' ? colors.borderButoon : ''}]}
          onPress={() => setCurrentScreen('campaign')}>
          <Text style={[styles.text_button_tab, {color: colors.text}]}>Campañas</Text>
          </TouchableOpacity>
          </View>
          
            <TouchableOpacity style={[styles.client_selected, {backgroundColor: colors.primarySeewt}]}>
              <IconButton 
              icon="account-plus"
              iconColor={colors.text}
              size={20}/>
            <Text style={[styles.client_selected_text, {color: colors.text}]}>Agregar cliente</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.container_store}>
            <Text style={[ styles.text_store, {color: colors.textColor}]}>Tienda Tmgrocery prueba</Text>
          </View>
        {
          currentScreen === 'products' ? (
              <Products products={products} 
              viewGrid={viewGrid} 
              notFound={notFound} 
              setSearch={setSearch} 
              search={search} 
              setCategory={setCategory}
              setDepartment={setDepartment}
              setBrand={setBrand}/>
          ): null
        }
        {
          currentScreen === 'clients' ? (
            <Clients/>
          ): null
        }
        {
          currentScreen === 'campaign' ? (
            <Campaign/>
          ): null
        }
          
          {
            !isTablet ? (
              <Minicart idCarro={cart !== null &&  cart.orderFormId}/>
            ):(
              <></>
            )
          } 
        </>
      )}
      {
        currentScreen === 'products' ? 
          <>
              <ImageBackground  source={background_filters} style={[styles.filterContainer_bottom, { backgroundColor: colors.background}]}>
                <Filters
                modalFilter={modalFilter} 
                setmodalFilter={setmodalFilter}
                viewGrid={viewGrid}
                setViewGrid={setViewGrid}
                page={page}
                setPage={setPage}
                totalProducts={totalProducts}
                setOrder={setOrder}
                order={order}
                products={products}
                setCategory={setCategory}
                setDepartment={setDepartment}
                setBrand={setBrand}
                />
                </ImageBackground>
          </>
          : null
      }
      
      </View>
      {
        isTablet ? (
      <View style={[styles.container_cart]}>
        <View style={[styles.header_cart]}>
        <Text style={[styles.title_cart, {color: colors.text}]}>Carrito</Text>
        <TouchableOpacity onPress={() => limpiarCarro()}>
            <Image 
            source={require('../../../../assets/img/borrar-carro.png')}
            />
            </TouchableOpacity> 
           <ShareCart />
        </View>
        <View style={[styles.content_cart, {backgroundColor: colors.backgroundCard}]}>
          
          <Minicartitems idCarro={cart && cart.orderFormId && cart.orderFormId}/>
        </View>
      </View>
        ): 
        <></>
      }
      
      
      <DynamicAlert
        show={alertParams.show}
        type={alertParams.type}
        message={alertParams.message}
        onClose={() => setAlertParams({ show: false, type: '', message: '' })}
      />
      {
        isCameraVisible && (
          <View style={{position: 'absolute', top: 20, width: '100%', height: '100%', left: 20, backgroundColor: 'red', borderRadius: 10 }}>
            <CodeScan  
            isCameraVisible={isCameraVisible} 
            handleBarcodeScanned={handleBarcodeScanned} 
            setIsCameraVisible={setIsCameraVisible}
            />
          </View>
        )
      }
      
    </View>
  );
}