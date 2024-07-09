import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from "./Products.Styles";
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SpecificationsList = (props) => {
    const { colors } = useTheme();
    const { data, setItemSelected, setItemCompleteSelected = {}, alto  } = props;
    const [selectedSpecs, setSelectedSpecs] = useState({});
    const [availableSKUs, setAvailableSKUs] = useState([]);
    const [specifications, setSpecifications] = useState([]);
    const [disponibilidad, setDisponibilidad] = useState(null)
    useEffect(() => {
        if (data.items && data.items.length > 0) {
            const initialSpecs = {};
            data.items[0].variations.forEach(variation => {
                initialSpecs[variation] = data.items[0][variation][0];
                setItemSelected(0)
            });
            setSelectedSpecs(initialSpecs);
            setSpecifications(data.skuSpecifications);
            setAvailableSKUs(data.items);
            filterSKUs(initialSpecs);
        }
    }, [data]);

    const handleSelectSpec = (specName, valueName) => {
      console.log(specName, valueName);
        const updatedSelectedSpecs = { ...selectedSpecs, [specName]: valueName };
        filterSkuForName(data.items, updatedSelectedSpecs)
        setSelectedSpecs(updatedSelectedSpecs);
        const filteredData = specifications.filter(item => item.field.name !== specName);
        const variationsOptions = data.items[0].variations.filter(dato => dato !== specName)
        const filterData = data.items.filter((spec) => spec[`${specName}`][0] === valueName)
        const remainingVariations = {};
    variationsOptions.forEach(variation => {
        remainingVariations[variation] = [...new Set(filterData.map(item => item[variation]))];
    });
    console.log(remainingVariations);
    setDisponibilidad(remainingVariations);
    };

    const filterSKUs = (updatedSelectedSpecs) => {
        const filteredSKUs = data.items.filter(item => {
            return Object.keys(updatedSelectedSpecs).every(specName => {
                return item[specName] && item[specName].includes(updatedSelectedSpecs[specName]);
            });
        });
        setAvailableSKUs(filteredSKUs);
    };

    const filterSkuForName = (items, updatedSelectedSpecs) => {
        const filteredItems = [];
        const matchingIndices = [];
        items.forEach((item, index) => {
            const isMatch = Object.keys(updatedSelectedSpecs).every(spec => {
                return item[spec] && item[spec].includes(updatedSelectedSpecs[spec]);
            });
            if (isMatch) {
                filteredItems.push(item);
                matchingIndices.push(index);
            }
        });
        setItemCompleteSelected(filteredItems)
        setItemSelected(matchingIndices)
    };
    return (
        <ScrollView style={{maxHeight: alto}}>
          <View style={[styles.modalContainer]}>
      {specifications.length > 0 ? (
        specifications.map((spec, index) => (
          <View key={index} style={styles.specContainer}>
              <Text style={[styles.title, {color: colors.text}]}>Seleccionar {spec.field.name}</Text>
              <View style={styles.specification_values_container}>
                {spec.values.map((value, valueIndex) => {
                  const isSelected = selectedSpecs[spec.field.name] === value.name;
                  const availableValues = disponibilidad && disponibilidad[spec.field.name] ? disponibilidad[spec.field.name].flat() : [];
                  const isDisabled = disponibilidad && disponibilidad[spec.field.name] && !availableValues.includes(value.name);

                  return (
                    <TouchableOpacity
                      key={valueIndex}
                      onPress={() => !isDisabled && handleSelectSpec(spec.field.name, value.name)}
                      style={[
                        styles.value,
                         { borderColor: isSelected ? colors.text : colors.borderButoon },
                        isDisabled && styles.disabled,
                      
                      ]}
                    >
                      <Text style={[isDisabled && styles.disabledText, { color: colors.text }]}>
                        {value.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            
          </View>
        ))
      ) : (
        <Text>Ups... Al parecer el producto no tiene especificaciones</Text>
      )}
    </View>
        </ScrollView>
    );
}

export default SpecificationsList;
