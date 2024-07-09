import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from "react-native";
import { styles } from "./CodeScan.styles";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { IconButton } from 'react-native-paper';
import { useTheme } from "react-native-paper";


export function CodeScan(props) {
    const { colors } = useTheme(); 

    const { isCameraVisible, handleBarcodeScanned, setIsCameraVisible } = props;
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(true);
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const checkCameraPermission = async () => {
            if (!permission) {
                return <View />;
            } else if (!permission.granted) {
                return (
                    <View style={styles.container}>
                        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                        <IconButton onPress={requestPermission} title="grant permission" />
                    </View>
                );
            } else if (permission && permission.granted === true) {
                setHasPermission(true);
            }
        };
        checkCameraPermission();
    }, [permission]);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [animatedValue]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        // Ajustamos la altura del movimiento de la linea 
        outputRange: [200, 100 - 2], 
    });
console.log(isCameraVisible, 'isCameraVisible =====');
    return (
        hasPermission && (
            isCameraVisible && (
                <View style={styles.wrapper}>
                    <IconButton
                        icon="close"
                        size={30}
                        style={styles.closeButton}
                        onPress={() => setIsCameraVisible(false)}
                    />
                    <View style={styles.container}>
                        <CameraView
                            style={[styles.camera, StyleSheet.absoluteFillObject]}
                            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                            barcodeScannerSettings={{
                                barcodeTypes: ["qr", "codabar", "ean13", "code128", "ean8", "pdf417"],
                            }}
                        />
                        
                        <Animated.View style={[styles.scannerLine, { transform: [{ translateY }] }]} />
                    </View>
                    <IconButton
                    icon="barcode-scan"
                    iconColor={colors.textInvert}
                    size={40}
                    />
                    <Text style={[styles.text_info, {color: colors.textInvert}]}>Coloque el código de barras adentro del recuadro</Text>

                    
                </View>
            )
        )
    );
}
