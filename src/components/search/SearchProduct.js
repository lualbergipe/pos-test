import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./SearchProduct.Styles";
import { Button, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawerButton from '../CustomDrawerButton/CustomDrawerButton';


const SearchProductsComponent = (props) => {
    const {handleSearch, search, setSearch, setIsCameraVisible, isCameraVisible, setCodeScan, setCategory, setDepartment, setBrand} = props
    const { colors } = useTheme(); 
    const clearSearch = () => {
      setSearch('');
      setCodeScan('')
      setCategory('&fq=productClusterIds:138')
      setDepartment('')
      setBrand('')
    };

    const handleScanButtonPress = () => {
      // Mostrar u ocultar la cámara cuando se presiona el botón de escanear
      setIsCameraVisible(!isCameraVisible); 
    };
    return (
        <View style={[styles.titlePageContainer]}>
          <CustomDrawerButton icon='menu'/>
          <View style={[styles.container_name]}>
          <Text style={[styles.text_name, { color: colors.text, }]}>LG</Text>
        </View>
        <View style={styles.inputContainer}>
        <Icon name="magnify" size={20} color={colors.placeholder} />
          <TextInput
            style={[styles.input, { color: colors.text, backgroundColor: colors.surface }]}
            placeholder="Buscar productos"
            placeholderTextColor={colors.placeholder}
            backgroundColor="transparent"
            onChangeText={handleSearch}
            value={search}
          />
          <View style={styles.container_search_code_clear}>
          {search.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color={colors.primary} />
          </TouchableOpacity>
        )}
          
          </View>
          
        </View>
        <Button
            style={[styles.qrButton, {backgroundColor:colors.btnSecoundary}]}
            onPress={handleScanButtonPress} 
          >
            <Icon name="qrcode-scan" size={20} color={colors.text} />
          </Button>
      </View>
    )
}
export default SearchProductsComponent