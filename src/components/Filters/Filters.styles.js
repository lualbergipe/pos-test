import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchBarInput: {
    backgroundColor: '#EDEDED',
  },
  filter_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 20,
  },
  filterButton: {
    borderRadius: 100,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 70
  },
  filterButtonText:{
  fontSize: 16,
  fontWeight: '800',
  lineHeight: 24,
  },
  listButton: {
    borderRadius: 5,
  },
  filterlabel:{
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 24
  },
  gridList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  modalView: {
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
  title__section:{
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 48,
    marginTop: 20
  },
  modal_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button__close_filter:{
    borderRadius: 200,
    padding: 10,
    marginTop: 15
  },
  modal_header_title:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  paddingBottom: 30,
  },
  content_clear:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button__clear_filter: {
    borderRadius: 100,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24
  },
  filtros_container: {
    flex: 1
  },
  title__filtro: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.36
  },
  filtros_grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'flex-start',
    padding: 20,
  },
  filtro_content: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#E3E4E6',
    borderRadius: 10,
    width: 230,
  },
  saveButton: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 24,
  },
  filtre_text: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10, // Espacio entre el input cuadrado y el texto
  },
  input_square: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10, // Espacio entre el input cuadrado y el texto
    flexDirection: 'row',
    justifyContent: 'center'
  },
  filter_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
