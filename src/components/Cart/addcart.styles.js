import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

button: {
    
    paddingVertical: 10, // Espaciado vertical dentro del botón
    paddingHorizontal: 15, // Espaciado horizontal dentro del botón
    borderRadius: 100, // Borde redondeado del botón
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#101115', 
    fontSize: 18, 
    textAlign: 'center', 
    fontWeight:'800'
  },
  button_icon: {
   width: 40,
   height: 40,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 200,
  },
}); 


