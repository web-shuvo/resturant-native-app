import { Text, View, Image } from "react-native";
import { connect } from 'react-redux';
import Icon from '../Components/Icon';
import mapDispatchToProps from './MainDispatch';

const mapStateToProps = (state) => {
    return {
        redState: state.MainReducer
    }
}

const DishDetails = (props) => {

    const data = props.route.params.data;
    const favCon = props.redState.favourites.some((item) => item.name === data.name);
    const favHandler = (data) => {
        if (favCon) {
            alert('Already Added')
        } else {
            props.getFavourites(data)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: data.image }} style={{ width: '100%', height: '40%' }} />
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 30, marginVertical: 15, }}>
                <Text style={{
                    textAlign: 'left',
                    color: '#c0392b',
                    fontSize: 20,
                    fontWeight: '700',
                    flexBasis: '90%',
                }}>
                    {data.name}
                </Text>

                <Icon name={favCon ? 'ios-heart' : 'ios-heart-outline'}
                    size={30} color='#c0392b'
                    style={{ flexBasis: '10%' }}
                    handler={() => { favHandler(data) }} />
            </View>
            <Text style={{ marginHorizontal: 15 }}>{data.description}</Text>
        </View>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(DishDetails);