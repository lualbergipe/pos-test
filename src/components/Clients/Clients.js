import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { DataTable, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getClients } from '../../api/clients';
import { useStore } from '../../state/ui/ui-store';

const Clients = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, onItemsPerPageChange] = useState(500);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('ascending');
  const store = useStore(state => state.vendor);
  const { colors } = useTheme();

  const [items, setItems] = useState([]);


  const sortItems = (column) => {
    const newDirection = sortColumn === column && sortDirection === 'ascending' ? 'descending' : 'ascending';
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedItems = [...items].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === 'ascending' ? -1 : 1;
      if (a[column] > b[column]) return newDirection === 'ascending' ? 1 : -1;
      return 0;
    });
    setItems(sortedItems);
  };

  const renderSortIcon = (column) => {
    if (sortColumn === column) {
      return sortDirection === 'ascending' ? (
        <Icon name="arrow-down" size={16} />
      ) : (
        <Icon name="arrow-up" size={16} />
      );
    } else {
      return <Icon name="arrow-down" size={16} color="#d3d3d3" />;
    }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect (() => {
    getCLientsApi()
  }, [])
const getCLientsApi = async () => {
  const clientesResult = await getClients(store);
 if ( clientesResult.length > 0 ) {
      setItems(clientesResult)
 }
  //setItems
  
}
  return (
    <ScrollView horizontal={true} nestedScrollEnabled={true} style={styles.container}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cell} onPress={() => sortItems('name')}>
              <View style={[styles.titleContainer, {width: 130,}]}>
                <Text style={[{color: colors.text}]}>Cliente</Text>
                {renderSortIcon('name')}
              </View>
            </DataTable.Title>
            <DataTable.Title numeric style={styles.cell} onPress={() => sortItems('calories')}>
              <View style={[styles.titleContainer, {width: 200,}]}>
                <Text style={[{color: colors.text}]}>Correo</Text>
                {renderSortIcon('calories')}
              </View>
            </DataTable.Title>
            <DataTable.Title style={styles.cell} onPress={() => sortItems('ingredients')}>
              <View style={[styles.titleContainer, {width: 120,}]}>
                <Text style={[{color: colors.text}]} >Identificación</Text>
                {renderSortIcon('ingredients')}
              </View>
            </DataTable.Title>
            <DataTable.Title style={styles.cell} onPress={() => sortItems('nationality')}>
              <View style={[styles.titleContainer, {width: 120,}]}>
                <Text style={[{color: colors.text}]}>Telefono</Text>
                {renderSortIcon('nationality')}
              </View>
            </DataTable.Title>
            <DataTable.Title numeric style={styles.cell} onPress={() => sortItems('fat')}>
              <View style={[styles.titleContainer, {width: 100,}]}>
                <Text style={[{color: colors.text}]}>Editar</Text>
                {renderSortIcon('fat')}
              </View>
            </DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key} style={styles.cellContainer}>
              <DataTable.Cell style={[styles.cell, {color: colors.textLink, width: 130, flexWrap: 'wrap'}]}>
                <Text style={[{color: colors.textLink}]}>{item.firstName}</Text></DataTable.Cell>
              <DataTable.Cell style={[styles.cell, {color: colors.text, width: 200,}]}>
                <Text style={[{color: colors.text}]}>{item.email}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={[styles.cell, {color: colors.text, width: 120,}]}>
              <Text style={[{color: colors.text}]}>{item.document}</Text>
                </DataTable.Cell>
              <DataTable.Cell style={[styles.cell, {color: colors.text, width: 120,}]}>
              <Text style={[{color: colors.text}]}>{item.homePhone}</Text>
                </DataTable.Cell>
              <DataTable.Cell style={[styles.cell, {color: colors.text, width: 100,}]}>
              <Text style={[{color: colors.text}]}>Editar</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cell: {
    padding: 10,
    textAlign: 'start'
  },
  titleContainer: {
    flexDirection: 'row',
   
    justifyContent: 'center'
  },
  cellContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
});

export default Clients;
