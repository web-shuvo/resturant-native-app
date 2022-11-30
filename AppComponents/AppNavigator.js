import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from "react-native";
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import DishDetails from './Screens/DishDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from './Components/Icon';
import Favourite from "./Screens/Favourites";


const styles = StyleSheet.create({
    status: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    }
})

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigate = () => {
    return (
        <Stack.Navigator screenOptions={(e) => ({
            headerStyle: {
                backgroundColor: '#c0392b'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => <Icon
                name="ios-menu"
                size={30}
                color="black"
                style={{ marginRight: 20 }}
                handler={() => e.navigation.toggleDrawer()}
            />,
        })}>
            <Stack.Screen name="menu" component={MenuScreen} />
            <Stack.Screen name="dish" component={DishDetails} options={({ route }) => ({
                title: route.params.data.name
            })} />
        </Stack.Navigator>
    )
};

const AppNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={StackNavigate} options={{ headerShown: false }} />
            <Drawer.Screen name="Favourite" component={Favourite} />
        </Drawer.Navigator>
    )
};

export default AppNavigator;