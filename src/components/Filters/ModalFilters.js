import React, { useState, useEffect } from 'react';
import { Modal, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { styles } from './Filters.styles';
import { Button, useTheme } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getCategorybyDepartment, getFiltersApi } from '../../api/products';
import { useStore } from '../../state/ui/ui-store';
import { Loader } from '../Loader/Loader';

// Función para eliminar duplicados
const removeDuplicateFilters = (filtros) => {
  const uniqueFilters = [];
  const uniqueKeys = new Set();

  filtros.forEach(filter => {
    Object.keys(filter).forEach(key => {
      if (!uniqueKeys.has(key)) {
        uniqueKeys.add(key);
        uniqueFilters.push({ [key]: filter[key] });
      }
    });
  });

  return uniqueFilters;
};

export function ModalFilters(props) {
  const { setmodalFilter, modalFilter, setOrder, order, products, setCategory, setDepartment, setBrand } = props;
  const { colors } = useTheme(); 
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filters, setFilters] = useState(null);
  const store = useStore(state => state.vendor);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products) {
      extractCategories(products);
    }
  }, [products]);

  const filtrar = () => {
    setmodalFilter(!modalFilter);
  };

  const countSelectedFilters = (selectedFilters) => {
    let count = 0;
    for (const key in selectedFilters) {
      if (selectedFilters.hasOwnProperty(key)) {
        const values = selectedFilters[key];
        count += values.length;
      }
    }
    return count;
  };

  const handleSelectFilter = (filter, value) => {
    setSelectedFilters((prevSelectedFilters) => {
      const newSelectedFilters = { ...prevSelectedFilters };
  
      if (newSelectedFilters[filter.name]) {
        if (newSelectedFilters[filter.name].includes(value.id)) {
          // Deselecciona el valor si ya está en el array
          newSelectedFilters[filter.name] = newSelectedFilters[filter.name].filter(id => id !== value.id);
        } else {
          // Agrega el valor al array si no está
          newSelectedFilters[filter.name].push(value.id);
        }
      } else {
        // Crea un nuevo array con el valor seleccionado
        newSelectedFilters[filter.name] = [value.id];
      }
      console.log(newSelectedFilters);
      return newSelectedFilters;
    });
  };

  const extractCategories = async (products) => {
    setLoading(true);
    const categories = new Set();
    products.forEach(product => {
      if (product.categories) {
        product.categories.forEach(category => categories.add(category));
      }
    });
    console.log(categories, 'las categorias que vamos a evaluar');
    const filtros = await getFiltersApi(store, Array.from(categories));
    console.log(filtros, 'los filtros');
    const uniqueFiltros = removeDuplicateFilters(filtros);
    console.log(uniqueFiltros[0].categorys, '%clas categorias a filtrar', 'color: red; backgoud-color: black');
    setFilters(uniqueFiltros);
    setLoading(false);
  };

  const handleFilter = async () => {  
    // Variables para controlar la existencia de cada filtro
    let hasCategory = false;
    let hasDepartment = false;
    let hasBrand = false;
    let hasOrder = false;
  
    // Inicializar variables de filtro como arrays para concatenar filtros múltiples
    let categoryFilter = '';
    let departmentFilter = '';
    let brandFilter = '';
    let orderFilter = '';
  
    // Iterar sobre las claves en selectedFilters
    for (const key in selectedFilters) {
      if (selectedFilters.hasOwnProperty(key)) {
        const values = selectedFilters[key];
  
        if (key === 'Categoría') {
          hasCategory = true;
          for (const value of values) {
            const dep = await getCategorybyDepartment(store, value);
            categoryFilter += `&fq=C:/${dep && dep.FatherCategoryId ? dep.FatherCategoryId : ''}/${value}/`;
          }
        } else if (key === 'Departamento') {
          hasDepartment = true;
          for (const value of values) {
            departmentFilter += `&fq=C:/${value}/`;
          }
        } else if (key === 'Marca') {
          hasBrand = true;
          for (const value of values) {
            const brandId = parseInt(value, 10);
            brandFilter += `&fq=B:${brandId}`;
          }
        } else if (key === 'order') {
          hasOrder = true;
          const orderValue = values[0];
          orderFilter = orderValue === 'desc' ? '&O=OrderByPriceDESC' : '&O=OrderByPriceASC';
        }
      }
    }
    // Aplicar los filtros generados
    setCategory(categoryFilter);
    setDepartment(departmentFilter);
    setBrand(brandFilter);
    setOrder(orderFilter);
  
    // Cierra o abre el modal de filtro según corresponda
    setmodalFilter(!modalFilter);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalFilter}
      onRequestClose={() => setmodalFilter(!modalFilter)}
    >
      <View style={[styles.modalView, {backgroundColor: colors.background}]}>
        <View style={styles.modal_header}>
          <View style={styles.modal_header_title}>
            <TouchableOpacity style={[styles.button__close_filter, {backgroundColor: colors.btnSecoundary}]} onPress={() => setmodalFilter(!modalFilter)}>
              <Icon name="close" size={30} color={colors.text} />
            </TouchableOpacity>
            <Text style={[styles.title__section, { color: colors.text }]}>Filtros</Text>
          </View>
          <View style={styles.content_clear}>
            <TouchableOpacity style={[styles.saveButton, {backgroundColor: colors.primarySeewt}]} onPress={filtrar}>
              <Text style={[styles.saveButtonText, {color: colors.text}]}>Borrar selección</Text>
            </TouchableOpacity>
            <Button style={[styles.button__clear_filter, { backgroundColor: colors.primary }]} textColor={colors.text} onPress={() => handleFilter()}>
              <Text style={[styles.saveButtonText, {color: colors.textBlack}]}>Filtrar {countSelectedFilters(selectedFilters)}</Text>
            </Button>
          </View>
        </View>
       
        {loading ? (
          <Loader/>
        ) : (
          <ScrollView>
            <View style={styles.filtros_container}>
              <Text style={[styles.title__filtro, { color: colors.text }]}>Ordenar</Text>
              <View style={[styles.filtros_grid, {borderColor: '#B4BAD8', borderBottomWidth: 1, paddingBottom: 20, paddingTop: 10}]}>
                <TouchableOpacity 
                  style={[styles.filtro_content]} 
                  onPress={() => handleSelectFilter({ name: 'order' }, { id: 'asc' })}
                >
                  <View style={styles.filter_row}>
                    <View style={[styles.input_square, { backgroundColor: selectedFilters['order'] && selectedFilters['order'].includes('asc') ? colors.primary : 'transparent', borderColor: selectedFilters['order'] && selectedFilters['order'].includes('asc') ? colors.text : '#E3E4E6' }]}>
                      { selectedFilters['order'] && selectedFilters['order'].includes('asc')  ? <Icon name="check" size={15} color={colors.textBlack} /> : <></>}
                    </View>
                    <Text style={[styles.filtre_text, { color: colors.text }]}>Menor a mayor precio</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.filtro_content]} 
                  onPress={() => handleSelectFilter({ name: 'order' }, { id: 'desc' })}
                >
                  <View style={styles.filter_row}>
                    <View style={[styles.input_square, { backgroundColor: selectedFilters['order'] && selectedFilters['order'].includes('desc') ? colors.primary : 'transparent', borderColor: selectedFilters['order'] && selectedFilters['order'].includes('desc') ? colors.text : '#E3E4E6' }]} >
                      { selectedFilters['order'] && selectedFilters['order'].includes('desc')  ? <Icon name="check" size={15} color={colors.textBlack} /> : <></>}
                    </View>
                    <Text style={[styles.filtre_text, { color: colors.text }]}>Mayor a menor precio</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                {filters && filters.length > 0 ? (
                  <View>
                    {filters.map((category, index) => (
                      <View key={index}>
                        {Object.keys(category).map((key) => {
                          const filter = category[key];
                          return (
                            filter.map((filtro, filtroIndex) => (
                              (filtro.name === 'Categoría' || filtro.name === 'Departamento' || filtro.name === 'Marca') && (
                                <View key={`${filtro.name}-${filtroIndex}`} style={{borderColor: '#B4BAD8', borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10}}>
                                  <Text style={[styles.filtre_text, { color: colors.text }]}>{filtro.name}</Text>
                                  <View style={styles.filtros_grid}>
                                    {
                                      filtro.values.length > 0 ?
                                      filtro.values.map((value, valueIndex) => (
                                        <View key={`${filtro.name}-${valueIndex}`} style={[styles.filtro_content, {borderColor: selectedFilters[filtro.name] && selectedFilters[filtro.name].includes(value.id) ? colors.text : '#C9CDE5' }]}>
                                          <TouchableOpacity onPress={() => handleSelectFilter(filtro, value)}>
                                            <View style={styles.filter_row}>
                                              <View style={[styles.input_square, { backgroundColor: selectedFilters[filtro.name] && selectedFilters[filtro.name].includes(value.id) ? colors.primary : 'transparent', borderColor: selectedFilters[filtro.name] && selectedFilters[filtro.name].includes(value.id) ? colors.text : '#E3E4E6' }]}>
                                                { selectedFilters[filtro.name] && selectedFilters[filtro.name].includes(value.id)  ? <Icon name="check" size={15} color={colors.textBlack} /> : <></>}
                                              </View>
                                              <Text style={[styles.filtre_text, { color: colors.text }]}>{value.name}</Text>
                                            </View>
                                          </TouchableOpacity>
                                        </View>
                                      ))
                                      : null
                                    }
                                  </View>
                                </View>
                              )
                            ))
                          );
                        })}
                      </View>
                    ))}
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Modal>
  );
}
