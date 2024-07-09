import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

button:{
    width:'90%',
    paddingVertical: 14, // Espaciado vertical dentro del botón
    paddingHorizontal: 30, // Espaciado horizontal dentro del botón
    borderRadius: 25, // Borde redondeado del botón
    marginBottom:40,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20, 
    lineHeight: 24,
    textAlign: 'center', 
    fontWeight:'800'
  },

  modalContainerPayment:{
     width: '100%',
     height: '100%',
     backgroundColor: 'white'  
 },
 headerShare:{
    fontSize:40,
    fontWeight: 'bold',
    marginBottom:20,
    
  },

  cabeceraPayment:{
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-between'
  },
  button2:{
    backgroundColor:"#D2FDF0",
    borderRadius: 35,
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  totalizer:{
    alignItems:'center'

  },
  medioPago:{
     alignItems:'center',
     backgroundColor:'#EEF0FA',
     width: 300,
     padding: 10,
     borderRadius: 12,
     margin: 'auto'
     
  },
  sombra:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

})  