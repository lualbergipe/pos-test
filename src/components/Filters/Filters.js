import React from 'react';
import { Button, useTheme } from "react-native-paper";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Filters.styles'
import { ModalFilters } from './ModalFilters';
import { useStore } from '../../state/ui/ui-store';
import grid_active_ligth from '../../../assets/img/grid_active_ligth.png'
import grid_inactive_ligth from '../../../assets/img/grid_inactive_ligth.png'
import list_active_ligth from '../../../assets/img/list_active_ligth.png'
import list_inactive_ligth from '../../../assets/img/list_inactive_ligth.png'
import grid_active_dark from '../../../assets/img/grid_active_dark.png'
import grid_inactive_dark from '../../../assets/img/grid_inactive_dark.png'
import list_active_dark from '../../../assets/img/list_active_dark.png'
import list_inactive_dark from '../../../assets/img/list_inactive_dark.png'


export function Filters(props) {
    const {modalFilter, setmodalFilter, setViewGrid, viewGrid, page, setPage, totalProducts, setOrder, order, products, setCategory, setDepartment, setBrand} = props;
    const { colors } = useTheme(); 
    const isDarkTheme = useStore(state => state.isDarkTheme);
    const toggleView = async () => {
      const newViewGrid = await viewGrid === 1 ? 4 : 1;
      setViewGrid(newViewGrid);
    };
    if(modalFilter){
      return (
        <ModalFilters modalFilter={modalFilter} setmodalFilter={setmodalFilter} setOrder={setOrder} order={order} products={products} setCategory={setCategory} setDepartment={setDepartment} setBrand={setBrand} />
      )
    }
return (
    <View style={styles.filter_container}>
          <TouchableOpacity
            style={[styles.filterButton, {backgroundColor: colors.primarySeewt}]}
            labelStyle={styles.filterlabel}
            mode="contained"
            textColor={colors.text}
            onPress={() => setmodalFilter(!modalFilter)}>
              <Icon name="filter-variant" size={20} color={colors.iconColor} />
            <Text style={[styles.filterButtonText, {color: colors.text}]}>
            Filtrar productos
            </Text>
          </TouchableOpacity>
          <View style={styles.gridList}>
          <Button
            style={styles.listButton}
            labelStyle={styles.filterlabel}
            mode="contained"
            textColor={colors.text}
            buttonColor={"transparent"}
            onPress={toggleView}>
            {
              isDarkTheme ? (
                <Image 
                source={viewGrid > 1 ? grid_active_dark : grid_inactive_dark}
                />
              ):
              (
                <Image 
                  source={viewGrid > 1 ? grid_active_ligth : grid_inactive_ligth}
              />
              )
            }
          </Button>
          <Button
            style={styles.listButton}
            labelStyle={styles.filterlabel}
            mode="contained"
            textColor={colors.text}
            buttonColor={"transparent"}
            onPress={toggleView}
          >
            {
              isDarkTheme ? (
                <Image 
                source={viewGrid === 1 ? list_active_dark : list_inactive_dark}
                />
              ):
              (
                <Image 
                  source={viewGrid === 1 ? list_active_ligth : list_inactive_ligth}
              />
              )
            }
          </Button>
          {/* <Button
            style={[styles.listButton, {padding: 0, margin: 0, }]}
            labelStyle={styles.filterlabel}
            mode="contained"
            textColor={colors.text}
            buttonColor={colors.botonesFiltros}
            onPress={() => page > 0 && setPage(page - 1)}
            disabled={page === 1 ? true : false}
          >
            <Icon name="chevron-left" size={20} color={colors.iconColor} />
          </Button>
          <Text>{page}</Text>
          <Button
            style={styles.listButton}
            labelStyle={styles.filterlabel}
            mode="contained"
            textColor={colors.text}
            buttonColor={colors.botonesFiltros}
            onPress={() => setPage(page + 1)}
            disabled={totalProducts < 10 ? true : false}
          >
            <Icon name="chevron-right" size={20} color={colors.iconColor} />
          </Button> */}

          </View>
          </View>
)
}