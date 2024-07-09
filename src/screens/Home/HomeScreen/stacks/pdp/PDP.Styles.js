import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title__Page: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '600',
    width: '30%',
  },
  titlePageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#E3E4E6',
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    
  },
  input: {
    
    padding: 10,
    fontSize: 16,
  },
  qrButton: {
    padding: 10,
    backgroundColor: 'transparent',
  },

  //STYLES PDP

  containerProduct: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 20, 
    height:"100%"
  },

  tinyLogo: {
    width: "90%",
    height:500,
    marginLeft:"0%",
    marginBottom:15
  },

  column: {
    flex: 1, 
  },

  title__Product: {
    fontSize: 32,
    lineHeight: 38.73,
    fontWeight: '700',
    
  },
  price__Product:{
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.73,
    paddingBottom: 20
  },
  paragraph: {
    fontSize: 16,
    marginBottom:30
  },

  paragraph2: {
    fontSize: 20,
    fontWeight:'700'
  },

  subtitle: {
    fontSize: 25,
    marginBottom:30,
    borderBottomWidth: 2, // Ancho del borde inferior
    borderBottomColor: 'red'
  },

  button: {
    backgroundColor: '#F71963', // Color de fondo del botón
    paddingVertical: 20, // Espaciado vertical dentro del botón
    paddingHorizontal: 20, // Espaciado horizontal dentro del botón
    borderRadius: 5, // Borde redondeado del botón
    marginBottom:40,
    width:'50%'
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20, 
    lineHeight: 24,
    textAlign: 'center', 
    fontWeight:'800'
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '30%',
    height: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    color: '#007bff',
    marginTop: 20,
  },

  desplegable:{
    fontWeight:'500',
    padding:20,
    maxWidth: '90%',
    borderBottomColor: '#585959',
    borderBottomWidth:1,
    paddingLeft:0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerAccordion: {
    borderRadius: 200
  },
  desplegableTexto:{
    fontSize:18,
    fontWeight: '500',
    lineHeight: 21.78
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  button_quantitySelector_Label:{
      color: '#134CD8',
  },
  quantityText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '800',
    marginHorizontal: 10,
    color: '#134CD8',
  },

  descriptionText:{
    fontSize:18,
    lineHeight:30,
    padding:25,
    
  },

  closeButton:{
    fontSize:20
  },
  titleSpec: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },

  valueSpec: {
    fontSize: 16,
    marginLeft: 16,
    width: 100,
    padding: 10,
    borderColor: '#E3E4E6',
    borderWidth: 2,
  },

  filaInicial:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems:'center'
  },

  iconDesplegable:{
    position:'absolute',
    right:0,
    bottom:15
  },
  buttonPressed: {
    backgroundColor: 'black',
    paddingVertical: 20, // Espaciado vertical dentro del botón
    paddingHorizontal: 20, // Espaciado horizontal dentro del botón
    borderRadius: 5, // Borde redondeado del botón
    marginBottom:40,
    width:'50%'
  },

  BotonSelected:{
    backgroundColor: 'green',
    color: 'white'
  },
  headerPdp:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30
  }

});