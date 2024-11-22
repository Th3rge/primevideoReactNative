import { Text, Image, StyleSheet, Platform, View, StatusBar, TouchableOpacity, FlatList, ScrollView  } from "react-native";
import PrimeVideoLogo from '../../../assets/prime_video.png';
import AmazonLogo from '../../../assets/amazon_logo.png';
import MovieTheWheel from '../../../assets/movies/the_wheel_of_time.png'
import MoviesCard from '../../../components/MovieCard/index.js'
import { MOVIESWATCHING } from '../../../utils/moviesWatching.js'
import { MOVIESCRIME } from '../../../utils/moviesCrimes.js'
import { MOVIESWATCH } from '../../../utils/moviesWatch.js'

export default function Home () {
    
    return <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
            <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
        </View>


        <View style={styles.category}>
            <TouchableOpacity>
                <Text style={styles.categoryText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Tv Shows</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Kids</Text>
            </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>        

        <TouchableOpacity style={styles.movieImageThumbnail}>
            <Image source={MovieTheWheel} style={styles.movieImage}/>
        </TouchableOpacity>
        
        <Text style={styles.moviesText}>Continue Watching</Text>
        <FlatList 
            data={MOVIESWATCHING}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <MoviesCard moviesURL={item.moviesURL}/>
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.moviesText}>Crime Movies</Text>
        <FlatList 
            data={MOVIESCRIME}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <MoviesCard moviesURL={item.moviesURL}/>
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.moviesText}>Watching in your language</Text>
        <FlatList 
            data={MOVIESWATCH}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <MoviesCard moviesURL={item.moviesURL}/>
            )}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
        />

</ScrollView>
    </View>




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: 'flex-start',
    },

    header: {
        width: '100%',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    primeLogoImg: {
        
    },

    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    category: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: "700",
    },

    moviesText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: 'flex-start',
    },

    movieImage: {

    },

    contentList: {
        paddingLeft: 18,
        marginRight: 30,
    },

    contentMovies: {

    }
    
})  