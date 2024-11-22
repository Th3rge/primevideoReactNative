import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function MoviesCard (props){
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={props.moviesURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    }
})