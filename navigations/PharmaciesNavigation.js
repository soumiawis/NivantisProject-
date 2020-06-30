import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Pharmacies from '../components/pharmacie/Pharmacies';
import PharmaciesDetails from '../components/pharmacie/PharmaciesDetails';
import Medicaments from "../components/medicament/Medicaments";
import {Icon} from "react-native-elements";



const pharamacieStack = createStackNavigator(
    {
        Pharmacies : {
            screen : Pharmacies,
            navigationOptions: ({navigation}) => ({
                title: 'Pharmacies',
                headerRight: () => (
                    <Icon
                        onPress={() => navigation.openDrawer()}
                        name="bars" type="font-awesome" containerStyle={{marginHorizontal: 15}}
                        color="#000"
                    />
                ),
            }),
        },
        PharmaciesDetails : PharmaciesDetails
    },
    {
        initialRouteName : 'Pharmacies',
    }
);
export default pharamacieStack;




