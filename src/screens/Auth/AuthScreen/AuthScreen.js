import { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from 'react-native';//import { LoginForm, RegisterForm } from "../../../components/Auth";
//import logo from "../../../../assets/logo.png";
import PermissionModal from "../../../components/PermissionModal";

export function AuthScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  //const [showLogin, setShowLogin] = useState(true);

  //const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Abrir Modal de Permisos" onPress={openModal} />
      <PermissionModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
}

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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 20,
  },
  permissionItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
});