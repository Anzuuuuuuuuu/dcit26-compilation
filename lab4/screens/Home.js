import React from "react";
import {
    View,
    Button,
    StyleSheet,
    ImageBackground
} from "react-native";


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/home/homeimg.jpg')} style={styles.bgStyle}>
                <View style = {styles.container2}>
                    <Button color="#f33ffc" title="Megumi Kato's Profile" onPress={() => navigation.navigate('Profile')}/>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create (
    {
        container: {
            flex: 1,
            justifyContent: 'center'
        },

        bgStyle: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },

        container2:
        {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }

    
)