import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titlePageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
      },
      title__Page: {
        fontSize: 36,
        lineHeight: 48,
        fontWeight: '600',
        width: '80%',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: '#E3E4E6',
        borderWidth: 1,
        borderRadius: 100,
        width: '65%',
        paddingLeft: 10,
        paddingRight: 10
        
      },
      input: {
        padding: 10,
        fontSize: 16,
        borderRadius: 100,
        height: 60,
        width: '90%',
        
      },
      qrButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 60,
        height: 60,
      },
      container_search_code_clear:{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"

      },
      container_name: {
        width: "100%",
        padding: 10,
        borderRadius: 200,
        height: 58,
        width: 58,
        textAlign: "center",
        borderColor: '#000000',
        borderWidth: 1
      },
      text_name: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
        textAlign: "center",
       
      }
})