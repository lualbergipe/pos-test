import React, {useState, useEffect} from 'react';
import { useTheme } from "react-native-paper";
import { Text, View, FlatList, Image, TouchableOpacity, Modal} from 'react-native';
import { styles } from "./carousel.styles";
import Carousel from 'react-native-reanimated-carousel';


export function Carrusel(props) {
    const idProducto = props.parameter
    const { colors } = useTheme(); 
    const list = [
        {
          id: 1,
          title: 'First Item',
          image: idProducto
        },
        {
          id: 2,
          title: 'Second Item',
          image: idProducto
        },
        {
          id: 3,
          title: 'Third Item',
          image: idProducto
        }
    ]


return(
    <View style={{ flex: 1 }}>
        <Carousel
        width='500'
        height='500'
        data={list}
        renderItem={({ item }) => (
            <View  style={styles.CarouselItem}>
            <Image source={{ uri: item.image}} style={styles.imgCarousel} />
            </View>
        )}
        />
    </View>
    )
}