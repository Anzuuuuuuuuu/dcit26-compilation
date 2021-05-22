import React from "react";
import {
    Dimensions,
    View,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    Text
} from "react-native";

const image1 = require('../img/profile/1.jpg');
const image2 = require('../img/profile/2.jpg');
const image3 = require('../img/profile/3.jpg');
const image4 = require('../img/profile/4.jpg');
const image5 = require('../img/profile/5.gif');

const Profile = ({navigation}) => {
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View>
                <ImageBackground source={image1} style={styles.backgroundImage1}>

                </ImageBackground>
                <ImageBackground source={image2} style={styles.backgroundImage2}>

                </ImageBackground>
                <ImageBackground source={image3} style={styles.backgroundImage3}>

                </ImageBackground>
                <ImageBackground source={image4} style={styles.backgroundImage4}>

                </ImageBackground>             
            </View>
            <ScrollView scrollViewstyle={styles.textStyle}>
            <Image source={image5} style={styles.bgStyle2}></Image>
                    <View style={styles.textStyle}>
                    
                    <Text style={styles.titleStyle}> Megumi Kato </Text>
                    <Text style={styles.subTitle}>Romaji: 加藤 恵</Text>
                    <Text style={styles.title2Style}>Age:</Text>
                    <Text style={styles.subTitle}>16</Text>
                    <Text style={styles.title2Style}>Birthday:</Text>
                    <Text style={styles.subTitle}>September 23 (Libra)</Text>
                    <Text style={styles.title2Style}>Gender:</Text>
                    <Text style={styles.subTitle}>Female</Text>
                    <Text style={styles.title2Style}>Three sizes:</Text>
                    <Text style={styles.subTitle}>B:84 / W:57 / H:83</Text>
                    <Text style={styles.title2Style}>Status:</Text>
                    <Text style={styles.subTitle}>Alive</Text>
                    <Text style={styles.title2Style}>Hair Color:</Text>
                    <Text style={styles.subTitle}>Brown</Text>
                    <Text style={styles.title2Style}>Eye Color:</Text>
                    <Text style={styles.subTitle}>Brown</Text>
                    <Text style={styles.title2Style}>Height:</Text>
                    <Text style={styles.subTitle}>160 cm</Text>
                    <Text style={styles.title2Style}>Hobbies:</Text>
                    <Text style={styles.subTitle}>Shopping</Text>
                    <Text style={styles.title2Style}>Alternative Name:</Text>
                    <Text style={styles.subTitle}>Megumi Kano (Mistaken by Tomoya)</Text>
                    <Text style={styles.subTitle}>Meguri (game name)</Text>
                    <Text style={styles.subTitle}>Tomoya Aki's wife</Text>
                    <Text style={styles.title2Style}>Relative(s):</Text>
                    <Text style={styles.subTitle}>Keiichi Kato (Cousin)</Text>
                    <Button color="#f33ffc" title="More information ABOUT Megumi Kato" onPress={() => navigation.navigate('GoAbout')}/>
                    </View>

                    

                    
                </ScrollView>
        </View>
            
    );
}

export default Profile;

const styles = StyleSheet.create (
    {
        container:
        {
            flex:1,
            flexDirection: 'row',
            justifyContent: 'center',
        },

        backgroundImage1: {
            width: '50%',
            height: Dimensions.get('window').height,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: .4
            
        },
        
        backgroundImage2: {
            width: '50%',
            height: Dimensions.get('window').height,
            position: "absolute",
            top: 0,
            left: 100,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: .4
            
        },

        backgroundImage3: {
            width: '50%',
            height: Dimensions.get('window').height,
            position: "absolute",
            top: 0,
            left: 200,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: .4
            
        },

        backgroundImage4: {
            width: '50%',
            height: Dimensions.get('window').height,
            position: "absolute",
            top: 0,
            left: 300,
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: .4
            
        },

        scrollviewStyle:
        {
            backgroundColor: 'transparent',
        },
        
        bgStyle: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            backgroundColor: 'black',
            opacity: 0.4
        },

        bgStyle2: {
            position: 'absolute',
            width: 350,
            height: 250,
            marginTop: 80,
            marginLeft: 20,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: 'black',
            opacity: 1
        },
        scrollViewStyle: {
            backgroundColor: 'transparent',
        },

        textStyle:
        {
            justifyContent: "center",
            alignItems: 'center'
        },

        titleStyle:
        {
            fontSize: 35,
            marginTop: 350,
        },

        title2Style:
        {
            fontSize: 20,
            fontWeight: 'bold',
        },

        subTitle:
        {
            fontSize: 18,
            paddingTop: 15,
            paddingBottom: 15
        }


    }
)