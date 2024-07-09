import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    buttonMinicart:{
        position: 'absolute',
        bottom: 30,
        right: 30,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth:0,
    },

    containericonCart:{
        borderRadius: 200
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        height: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'top',
        alignItems: 'left',
        paddingTop: '6%',
       paddingLeft: '1%'
      },
      closeButton: {
        color: '#007bff',
        marginTop: 20,
      },

      productCart:{
        fontSize:16,
        lineHeight: 20,
        textAlign: 'center',
        padding: 3
      },

      productCartPrice:{
        fontSize:18,
        lineHeight: 20,
        fontWeight:'800'
      },
      title__Product:{
        fontSize:35,
        fontWeight: '700',
        marginBottom:20
      },
      itemMinicart:{
        borderBottomWidth: 1,
        marginBottom: 10,
        width: '90%',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        height:"90"
      },
      stretch: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
      },
      
      view1:{
        flex:2,
      },
      view2:{
        flex:8,
      },
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
      totalText:{
        fontSize:35,
        fontWeight: '700',
        marginBottom:20
      },
      badgeQuantity:{
        backgroundColor: '#EAFCE3',
        borderRadius: 8,
        position: 'absolute',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:15,
        fontWeight: '800'
      },
      carroVacio:{
        alignItems:'center',
        height: '90%',
        justifyContent:'center'
      },
      contentMinicart:{
        marginLeft:15,
        marginTop:20
      },
      quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      quantityButton: {
        marginHorizontal: 5,
        borderRadius: 0,
        color: '#134CD8',
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



});