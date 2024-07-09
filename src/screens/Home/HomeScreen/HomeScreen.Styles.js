import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    maxWidth: '100%'
  },
  logo: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
  container_Products: {
    width: '65%'
  },
  container_cart: {
    width: '35%',
    padding: 20
  },
  title_cart:{
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 48
  },
  content_cart: {
    borderWidth: 1,
    borderColor: '#C9CDE5',
    borderRadius: 10,
    flex: 1
  },
  tabs_container:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
  },
  text_button_tab:{
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36
  },
  tabs_screen: {
    flexDirection: 'row',
    borderRadius: 10,
    maxWidth: 'auto',
  },
  tab_view: {
    padding: 15
  },
  client_selected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingRight: 10,
  },
  client_selected_text:{
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16
  },
  container_store:{
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#B4BAD8'
  },
  filterContainer_bottom:{
    position: 'absolute',
    bottom: 30,
    borderRadius: 100,
    width: '100%',
    flex: 1,
  },
  text_store:{
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36,
  },
  header_cart:{
    flexDirection:'row',
    gap: 25,
    alignItems:'center',
    paddingBottom:10,
  }

});