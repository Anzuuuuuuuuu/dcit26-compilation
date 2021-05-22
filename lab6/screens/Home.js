import React, {useState, useEffect} from "react";
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground
} from "react-native";


const Home = ({navigation}) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const backgroundx = require('../img/bg.jpg');

    function fetchRandomData(){
        setLoading(true);
        fetch('https://randomuser.me/api')
        .then((response) => response.json())
        .then((json) => {
            setData(json.results[0]);
            console.log(json.results[0]);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchRandomData();
    }, []);

    return (
        <View style={styles.container}>
        <ImageBackground source={backgroundx} style={styles.bgstyle}>

        </ImageBackground>
            { isLoading ? <ActivityIndicator size="large" color ="#f33ffc" /> : (
                <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
                    <Image style={styles.imageStyle} source={{uri: data.picture.large}}></Image>
                </TouchableOpacity>
            )}
            
            { isLoading ? true : (
                    <Text style={styles.txtstyle}>{data.name.first} {data.name.last}</Text>
            )}


            { isLoading ? true : (
                <Button color="#f33ffc" title="Random User" onPress={() => {fetchRandomData();}} />
            )}

                 
        </View>
    );
}

export default Home;

const styles = StyleSheet.create (
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        imageStyle: {
            width: 225,
            height: 225,
            resizeMode: "cover",
        },

        txtstyle: {
            fontSize: 20,
            textAlign: "center",
            marginBottom: 100
        },

        bgstyle: {
            width: '100%',
            height: '100%',
            position: "absolute",
        }

    }

    
)