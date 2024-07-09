import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
   closeButton:{
    fontSize:25
   },

   modalContainerShare: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContentShare: {
    width: '65%',
    height: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'left',
   paddingLeft: '1%',
   justifyContent:'space-around'
  },

  encabezadoShare:{
    flexDirection: 'row',
    
    width:'98%'
  },
  headerShare:{
    fontSize:40,
    fontWeight: '800',
    marginBottom:20,
    
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'80%'
  },

  zonaCampaign:{
    marginBottom:40
  },

  imgCerrar:{
    position:'absolute',
    right: 0
  },

  zonaQR:{
    flexDirection: 'row',
    backgroundColor: '#D2FDF0',
    width:'90%',
    gap: 20,
    borderRadius:15,
    padding: 30,
    float: 'bottom'
   

  },
  zonaFormulario:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  botonForm:{
    backgroundColor: '#EEF0FA',
    height:40,
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 20
  },

  filaBotones:{
    flexDirection: 'row',
    gap:15,
    marginTop:20
  },

  botonFormShare:{
    backgroundColor: '#27F5D1',
    height:40,
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 20
  },
 



})