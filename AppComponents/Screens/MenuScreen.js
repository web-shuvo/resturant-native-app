import { View, FlatList, Text } from "react-native";
import { useEffect } from "react";
import { connect } from "react-redux";
import MapDispatchToProps from './MainDispatch';
import MenuItems from '../Components/MenuItems';

const mapStateToProps = (state) => {
    return {
        redState: state.MainReducer
    }
}

const MenuScreen = (props) => {

    useEffect(() => {
        fetch('https://resturant-app-bd-default-rtdb.asia-southeast1.firebasedatabase.app/dishes.json', {
            method: 'get'
        })
            .then(res => res.json())
            .then(data => {
                props.getDishes(data)
            })
            .catch(error => alert(error.message))
    }, []);

    return (
        <View style={{ flex: 1, marginTop: 30 }}>
            {props.redState.dishes.length === 0 ? <Text>Loading...</Text> : <FlatList
                data={props.redState.dishes}
                renderItem={(e) => <MenuItems items={e.item} navigate={props.navigation.navigate} />}
            />}
        </View>
    )
};

export default connect(mapStateToProps, MapDispatchToProps)(MenuScreen);