import AsyncStorage from "@react-native-async-storage/async-storage";
import { PERMISOS } from "../utils/constants";

export const setPermissionStorage = async () => {
    try {
        await AsyncStorage.setItem(PERMISOS, 'true');
        return true;
      } catch (e) {
        return null;
      }
} 
export async function getPermissionStorage() {
    try {
      const permisos = await AsyncStorage.getItem(PERMISOS);
      return permisos;
    } catch (e) {
      return null;
    }
  }