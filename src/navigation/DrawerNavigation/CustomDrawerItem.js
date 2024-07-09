import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';

const CustomDrawerItem = ({ label, iconName, focused, onPress }) => {
  const { colors } = useTheme();

  return (
    <DrawerItem
     
      label={() => (
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconContainer_left}>
              <AwesomeIcon
                name={iconName}
                size={20}
                color={colors.iconColor}
              />
               <Text style={[styles.itemLabel, { color: focused ? colors.text : colors.text }]}>
                {label}
              </Text>
          </View>
            </View>
          <AwesomeIcon
              name='chevron-right'
              size={10}
              color={colors.iconColor}
            />
        </View>
      )}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 16,
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconContainer_left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },

});

export default CustomDrawerItem;
