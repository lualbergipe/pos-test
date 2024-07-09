import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  productItemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#F2F4F5',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 12, 
    elevation: 10, 
    borderRadius: 10,
    paddingBottom: 0,
  },
  productItemContainer_list: {
    marginTop: 10,
    marginBottom: 10,
    margin: 5,
    flex: 1,
    borderRadius: 10,
    borderColor: '#C9CDE5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
  },
  productItem_list: {
    flexDirection: 'row',
    gap: 5
  },
  container_product_list:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignItems: 'center',
    paddingRight: 20
  },
  productItem: {
    alignContent: 'center',
  },
  productImage: {
    width: 180,
    height: 150,
  },
  productImage_list: {
    width: 120,
    height: 80,
  },
  productDetails: {
   alignContent: 'center',
   gap: 5,
   justifyContent: 'center',
   padding: 5,
   paddingBottom: 0,
   
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.36,
    textDecorationLine: 'underline',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,

  },
  productSku: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
  },
  productPrice: {
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: '500',
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,

  },
  priceWithoutDiscount:{
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '500',
      color: '#979899',
      textDecorationLine: 'line-through',
      paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,


  },
  productLink: {
    fontSize: 14,
    color: '#1E90FF',
    padding: 5,
    paddingBottom: 0,

  },
  priceColumn: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingBottom: 0,

  },
  footerCard:{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 0,
  },
  button_variation:{
      marginLeft: 12,
      borderRadius: 100,
      
  },
  container_especificaciones: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_spec: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%', // Ajusta el ancho según sea necesario
  },
  text_product_espec: {
    textAlign: 'left',
    alignSelf: 'stretch', 
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24.2
  },
  text_product_sku:{
    color: '#007C66',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20
  },
  content_name_sku:{
paddingBottom: 30,
paddingTop: 30
  },
  button_detalle:{
      width: '50%',
      padding: 10,
      borderRadius: 100,
      
  },
  button_variation_Label:{
  fontSize: 16,
  lineHeight: 16,
  fontWeight: '800',
  },
  button_detalle_Label: {
  color: '#000',
  fontSize: 16,
  lineHeight: 16,
  fontWeight: '800',
  },
  modalContainer: {

  },
  modalContent: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  specification_values_container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  specContainer: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    width: 100,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center'
  },
  title__container: {
    flexDirection: 'row',
  },
  title_conten:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions_conten:{
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexDirection: 'row',
  },
  closeButton: {
  width: '20%',
  },
  title__Product: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 48,
  },
  container_error: {
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 100,
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  error_text:{
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.78
  },
  error_text_subtitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19.36
  },
  button_clear_search: {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button_variation_Label: {
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 24,
  },
  BotonSelected:{
    backgroundColor: '#134CD8',
    color: 'white'
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none'
  },
  disabledText: {
    color: '#a1a1a1'
  },
  arrow: {
    fontSize: 16,
    borderRadius: 100,
    width: 30, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  headerExpand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 0,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    
  },
  specification_values_container:{
    borderColor: '#000',
    borderTopColor: 'transparent',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  modal_footer:{
    flexDirection: 'row',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  AddCart:{
    position: 'absolute',
    top: 10,
    left: 115,
    zIndex: 1,
  },
  AddCart_list:{

  },
  button_icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    alignContent: 'center'
   },
   buttonText:{
   fontSize: 40,
   marginTop: -20,
   textAlign: 'center'
   }
});