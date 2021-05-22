// ANAK ITABI MO, AKO NA.
// TRA PADJAK

import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem

} from '@react-navigation/drawer';
import {
    Drawer,
    Text,
    Avatar,
    Paragraph,
    Title,
    Caption
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';


export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView { ... props}>
              
                <View style={styles.drawCont}>
                <Title style={styles.menuStyle}>
                    Main Menu
                </Title>
                
                    

                </View>

                <Drawer.Section>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon.Button name="ios-home" color="gray" backgroundColor="#ffffff" size={size}></Icon.Button>
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('GoHome')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon.Button name="information-circle" color="gray" backgroundColor="#ffffff" size={size}></Icon.Button>
                        )}
                        label="About"
                        onPress={() => {props.navigation.navigate('GoAbout')}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.botDrawerSec}>
            <View style={styles.memInfo}>
                <View>
                    <Title style={styles.gmStyle}>Group Members:</Title>
                </View>
                <View style={{flexDirection:'row', marginTop:15 }}>
                    <Avatar.Image
                        source={require('../img/ket.jpg')}
                        size={50}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.nameStyle}>Keith Lagumbay</Title>
                        <Caption style={styles.sectionStyle}>BSCS 3—1</Caption>
                        </View>
                </View>

                <View style={{flexDirection:'row', marginTop:15 }}>
                    <Avatar.Image
                        source={require('../img/jud.png')}
                        size={50}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.nameStyle}>Jude Cabardo</Title>
                        <Caption style={styles.sectionStyle}>BSCS 3—1</Caption>
                        </View>
                </View>

                <View style={{flexDirection:'row', marginTop:15 }}>
                    <Avatar.Image
                        source={require('../img/langpalag.jpg')}
                        size={50}
                        />
                        <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.nameStyle}>Jethro Aque</Title>
                        <Caption style={styles.sectionStyle}>BSCS 3—1</Caption>
                        </View>
                </View>
            </View>
            </Drawer.Section>

        </View>
    )
}

const styles = StyleSheet.create({
    botDrawerSec: {
        marginBottom: 20,
        borderTopColor: '#242124',
        borderTopWidth: 1,

    },
    drawCont: {
        flex: 1,
    },
    memInfo: {
        paddingLeft: 20,
    },

    gmStyle: {
        fontSize: 18,
        marginTop: 12,
        fontWeight: 'bold',
    },

    nameStyle: {
        fontSize: 15,
        marginTop: 3,
        fontWeight: 'bold',
    },

    sectionStyle: {
        fontSize: 13,
        lineHeight: 13,
    },

    menuStyle: {
        paddingLeft: 20,
        marginTop: 10
    },
})