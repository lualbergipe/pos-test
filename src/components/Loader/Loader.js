import React from 'react';
import {styles} from './Loader.styles'
import { useTheme, ActivityIndicator } from "react-native-paper";
import { Text, View } from 'react-native';

export function Loader () {
    const { colors } = useTheme(); 

return(
    <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} color={colors.primary} size="large" />
        <Text style={[styles.loadingText, { color: colors.text }]}>Cargando...</Text>
    </View>
)
}