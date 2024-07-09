//import { useAuth } from "../hooks";
import { AuthScreen } from "../screens/Auth";
import { useStore } from "../state/ui/ui-store";
import { AppNavigation } from "./AppNavigation";
import { AuthNavigation } from "./AuthNavigation";

export function RootNavigation() {
  const user = useStore((state) => state.user);
console.log(user, 'el usuario ===========');
  return user ? <AppNavigation /> : <AuthNavigation />;

}