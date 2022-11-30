import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginBottom: 30
    },
    text: {
        color: '#c0392b',
        fontSize: 15,
        fontWeight: '700'
    }

})

const MenuItems = (props) => {
    let item = props.items;

    return (
        <Pressable style={styles.container} onPress={() => { props.navigate('dish', { data: item }) }}>
            <View style={{ flexBasis: '40%' }}>
                <Image source={{ uri: item.image }} style={{ width: '90%', height: 90 }} />
            </View>
            <View style={{ flexBasis: '60%' }}>
                <Text style={styles.text}>{props.items.name}</Text>
                <Text numberOfLines={3}>{props.items.description}</Text>
            </View>
        </Pressable>
    )
};

export default MenuItems;