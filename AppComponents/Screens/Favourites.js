import { connect } from "react-redux";
import { View, FlatList, Text } from "react-native";
import FavItem from '../Components/FavItem';

const mapStateToProps = (state) => {
    return {
        redState: state.MainReducer
    }
}

const Favourite = (props) => {
    const favItems = props.redState.favourites;
    return (
        <View style={{ flex: 1, marginTop: 30, marginHorizontal: 45, }}>

            {favItems.length === 0 ? <Text style={{ textAlign: 'center' }}>List is empty</Text> : <FlatList
                data={favItems}
                renderItem={(e) => <FavItem item={e.item} navigate={props.navigation.navigate} />} />
            }
        </View>
    )
}

export default connect(mapStateToProps)(Favourite);