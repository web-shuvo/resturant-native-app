import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const Icon = (props) => {
    return (
        <Pressable style={props.style} onPress={props.handler}>
            <Ionicons name={props.name} size={props.size} color={props.color} />
        </Pressable>
    )
};

export default Icon;