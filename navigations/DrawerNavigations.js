import React, {Component} from 'react';
import {ScrollView, View, Text, Dimensions} from "react-native";
import {Avatar, Icon} from "react-native-elements";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import {createStackNavigator} from "react-navigation-stack";
import medicamentStack from "./MedicamentNavigation";
import pharamacieStack from "./PharmaciesNavigation";

const DrawerContent = (props) => {
    return <ScrollView>
        <View style={{flex: 1}}>
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#41ce7b',
                padding: 10, borderBottomColor: '#429770', borderBottomWidth: 1
            }}>
                <Avatar rounded size="xlarge" source={require('../assets/logo.png')}/>
            </View>

            <DrawerItems {...props} />

        </View>
    </ScrollView>
}


const drawernavigation = createDrawerNavigator({
    Medicaments: {
        screen: medicamentStack,
        navigationOptions: {
            drawerLabel: 'Medicaments',
            drawerIcon: ({tintColor}) => (
                <Icon name='medkit' type="font-awesome" color={tintColor}/>
            )
        }
    },
    Pharmacies: {
        screen: pharamacieStack,
        navigationOptions: {
            drawerLabel: 'Pharmacies',
            drawerIcon: ({tintColor}) => (
                <Icon name='hospital-o' type="font-awesome" color={tintColor}/>
            )
        }
    }

}, {
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true,
    contentOptions: {
        activeTintColor: '#f8961e',
        activeBackgroundColor: '#fff',
        labelStyle: {fontWeight: 'bold'},
        iconContainerStyle: {padding: 0}
    }
})


export default drawernavigation;