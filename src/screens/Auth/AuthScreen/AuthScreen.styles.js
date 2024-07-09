import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  screen: {
    width: "100%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  title__wellcome: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 28
  },
  button_next: {
    marginTop: 30,
    width: '50%',
    borderRadius: 100,
  },
  button_next_disabled: {
    backgroundColor: '#E3E4E6',
    marginTop: 30,
    width: '50%',
    borderRadius: 0,
  },
  button_next_Label: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24
  },
  title__login: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 28
  },
  subtitle__login: {
    marginTop: 30,
    width: '50%'
  },
  label__login: {
    textAlign: 'start',
  },
  
  container__form: {
  width: '50%',
  marginTop: 30
  },
  button_retro:{
    backgroundColor: 'transparent',
    marginTop: 10
  },
  button_next_Label_retro:{
    textDecorationLine: 'underline',
    fontSize: 15
  },
  background_welcome:{
    position: 'absolute',
  }
});