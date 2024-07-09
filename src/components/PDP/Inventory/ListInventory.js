import React, {useState, useEffect} from 'react';
import { useTheme } from "react-native-paper";
import { Text, View, FlatList } from 'react-native';
import { getInventory } from '../../../api/inventory';
import { styles } from "./ListInventory.styles";

export function ListInventory (props) {
    const idProducto = props.parameter
    const { colors } = useTheme(); 
    const [inventory, setInventory] = useState(null)
    const [warehouseDetails, setWarehouseDetails] = useState([]);
    useEffect(() => {
        inventoryApi();
      }, [])

     
    
      const inventoryApi = async () => {
        const inventory = await getInventory(idProducto);
        setInventory(inventory);
        console.log('INFO INVENTARIO', inventory)
      }

      useEffect(() => {
        const extractWarehouseDetails = (inventory) => {
          return inventory?.balance?.map(item => ({
            name: item.warehouseName,
            quantity: item.totalQuantity
          }));
        };
    
        const details = extractWarehouseDetails(inventory);
        setWarehouseDetails(details);
      }, [inventory]);  



return(
    <View>
         <Text style={styles.tituloInventory}> Disponibilidad del producto</Text>
            <Text style={styles.identificador}>IDENTIFICADOR:  {props.parameter}</Text>
            <FlatList
                data={warehouseDetails}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <Text  style={styles.bodegaInfo}>{item.name}: {item.quantity}</Text>
                )}
                style={styles.flatList}
            />
            
    </View>
)
}