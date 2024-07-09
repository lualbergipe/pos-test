import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 7, 43, 0.6275)',
    gap: 30,
    borderRadius: 10
},
container: {
    width: 500,
    height: 300,
},
camera: {
    width: '100%',
    height: '100%',
    
},
closeButton: {
    position: 'absolute',
    top: 20,
    left: 30,
    backgroundColor: 'white',
    borderRadius: 200,
    padding: 5,
},
scannerLine: {
        position: 'absolute',
        width: '100%',
        height: 2,
        backgroundColor: 'red',
    },
    text_info:{
        fontSize: 18,
        lineHeight: 21.78,
        fontWeight: '700'
    }
});