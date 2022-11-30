import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import Store from './AppComponents/Redux/Store';
import AppNavigator from './AppComponents/AppNavigator';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
};
