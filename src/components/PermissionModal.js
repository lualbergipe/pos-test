import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, StyleSheet, Switch, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStore } from '../state/ui/ui-store';

const PermissionModal = ({ visible, onClose, email }) => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const login = useStore((state) => state.login);

  useEffect(() => {
    // Load permissions from AsyncStorage
    const loadPermissions = async () => {
      const location = await AsyncStorage.getItem('locationEnabled');
      const camera = await AsyncStorage.getItem('cameraEnabled');
      const notifications = await AsyncStorage.getItem('notificationsEnabled');

      if (location !== null) setLocationEnabled(JSON.parse(location));
      if (camera !== null) setCameraEnabled(JSON.parse(camera));
      if (notifications !== null) setNotificationsEnabled(JSON.parse(notifications));
    };

    if (visible) {
      loadPermissions();
    }
  }, [visible]);

  const requestLocationPermission = async () => {
    if (locationEnabled) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso de ubicación denegado');
        setLocationEnabled(false);
      }
    }
  };

  const requestCameraPermission = async () => {
    if (cameraEnabled) {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso de cámara denegado');
        setCameraEnabled(false);
      }
    }
  };

  const requestNotificationsPermission = async () => {
    if (notificationsEnabled) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso de notificaciones denegado');
        setNotificationsEnabled(false);
      }
    }
  };

  const handleSaveAndContinue = async () => {
    await AsyncStorage.setItem('locationEnabled', JSON.stringify(locationEnabled));
    await AsyncStorage.setItem('cameraEnabled', JSON.stringify(cameraEnabled));
    await AsyncStorage.setItem('notificationsEnabled', JSON.stringify(notificationsEnabled));

    await requestLocationPermission();
    await requestCameraPermission();
    await requestNotificationsPermission();
    onClose();
    login(email);
  };

  const handleAcceptAll = async (value) => {
    setLocationEnabled(value);
    setCameraEnabled(value);
    setNotificationsEnabled(value);
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text>Hello! {email}</Text>
            <View style={styles.headerTextContainer}>
              <Text style={styles.modalTitle}>Permitir permisos de aplicaciones</Text>
              <Text style={styles.modalSubtitle}>
                Estos permisos sirven para que tu aplicación funcione correctamente, puedes revocarlos en la configuración de tu dispositivo en cualquier momento.
              </Text>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveAndContinue}>
              <Text style={styles.saveButtonText}>Guardar y continuar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.permissionItem}>
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Servicio de localización</Text>
              <Text style={styles.permissionSubtitle}>Obligatorio para aceptar pagos con tarjeta</Text>
            </View>
            <Switch
              value={locationEnabled}
              onValueChange={setLocationEnabled}
            />
          </View>

          <View style={styles.permissionItem}>
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Cámara</Text>
              <Text style={styles.permissionSubtitle}>Necesario para escanear códigos de barras con la cámara del dispositivo</Text>
            </View>
            <Switch
              value={cameraEnabled}
              onValueChange={setCameraEnabled}
            />
          </View>

          <View style={styles.permissionItem}>
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Notificaciones</Text>
              <Text style={styles.permissionSubtitle}>Permitir notificaciones</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.permissionItem}>
            <View style={styles.permissionTextContainer}>
              <Text style={styles.permissionTitle}>Permitir todo</Text>
            </View>
            <Switch
              value={locationEnabled && cameraEnabled && notificationsEnabled}
              onValueChange={handleAcceptAll}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PermissionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  headerTextContainer: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'left',
  },
  modalSubtitle: {
    width: '60%',
    fontSize: 14,
    textAlign: 'left',
    marginVertical: 10,
    color: 'gray',
  },
  saveButton: {
    backgroundColor: '#134CD8',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  permissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
  },
  permissionTextContainer: {
    flex: 1,
    gap: 15,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  permissionSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
