import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet
} from "react-native";
const Profile = ( {route} ) => {

    const data = route.params;

    return (
        <ScrollView>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </ScrollView>
            
    );
}

export default Profile;

const styles = StyleSheet.create (
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

    }
)