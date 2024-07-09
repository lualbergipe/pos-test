import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import { HomeStack, OrderStack } from "../stack";
import CustomDrawerContent from './CustomDrawerContent';
import { StyleSheet, Text } from 'react-native';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    tabBar: {
      justifyContent: 'center',
    },
  });

  return (
      <Drawer.Navigator
      /*  defaultStatus="open" */
        detachInactiveScreens={false}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ route }) => ({
          label: route.name,
          focused: true,
          drawerStyle: styles.tabBar,
        /*  drawerType: "permanent", */
          headerStyle: {
            backgroundColor: colors.background,
          },
        /*  headerLeft: () => null, */
        /* headerLeft: () => <CustomDrawerButton />, */
        })}
      >
        <Drawer.Screen
          name="home"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
          /* options={{
            title: 'Inicio',
            headerTitle: (props) => <Text {...props} style={{ color: colors.text }}>Inicio</Text>,
          }} */
        />
        <Drawer.Screen
          name="orders"
          component={OrderStack}
          options={{ title: "Pedidos" }}
        />
      </Drawer.Navigator>
  );
}
