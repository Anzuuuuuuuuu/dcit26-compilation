import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import { DrawerContent } from './Shower';

const Drawer = createDrawerNavigator();

const MainNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent { ... props} />}>
                <Drawer.Screen name="GoHome" component={ HomeStack } />
                <Drawer.Screen name="GoAbout" component={ AboutStack } />
            </Drawer.Navigator>
        </NavigationContainer>
        
        
    );
}

export default MainNav;

