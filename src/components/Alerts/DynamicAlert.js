// DynamicAlert.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const DynamicAlert = ({ show, type, message, duration = 1000, onClose }) => {
  const [showAlert, setShowAlert] = useState(show);

  useEffect(() => {
    if (show) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setShowAlert(false);
    }
  }, [show, duration, onClose]);

  if (!show) {
    return null; // No renderizar nada si `show` es `false`
  }


  return (
    <View>
      <AwesomeAlert
        show={showAlert}
        showProgress={true}
        title={type.charAt(0).toUpperCase() + type.slice(1)}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
      />
    </View>
  );
};

export default DynamicAlert;
