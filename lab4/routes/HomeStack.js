import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';



import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator()

const HeaderOptions = {
    headerStyle: {
      backgroundColor: '#fb00ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
    },
  };

const HomeStack = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={HeaderOptions}>
            <Stack.Screen name="Home" component={Home} options={{
                title: 'Home',
                headerLeft: () => (
                    <Icon.Button name="menu" size={40} color="black" backgroundColor="#fb00ff" onPress={() => navigation.openDrawer()}>

                    </Icon.Button>
                )
                }}/>
                <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    ) 

}


export default HomeStack;

