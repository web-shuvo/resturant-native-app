import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import MapDispatchToProps from "../Screens/MainDispatch";
import Icon from './Icon';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#eaecee',
        borderRadius: 10,
        marginBottom: 20
    },
    imgStyle: {
        width: '100%',
        height: 90,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    textStyle: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    }
})

const FavItem = (props) => {

    const removeHandler = () => {
        Alert.alert(
            'Remove favourite?',
            'Are you sure to remove ' + props.item.name + ' from favourite',
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Okay',
                    onPress: () => { props.removeFavourite(props.item.name) }
                }
            ]
        )
    };

    return (
        <View style={[styles.container, {}]}>
            <Icon name='close-circle'
                size={25}
                color='white'
                style={{ position: 'absolute', top: 0, right: 0, zIndex: 999 }}
                handler={removeHandler} />
            <Image source={{ uri: props.item.image }} style={styles.imgStyle} />
            <Pressable onPress={() => props.navigate('dish', { data: props.item })}>
                <Text style={styles.textStyle}>{props.item.name}</Text>
            </Pressable>

        </View>
    )
};

export default connect(null, MapDispatchToProps)(FavItem);