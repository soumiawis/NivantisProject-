import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Medicaments from '../components/medicament/Medicaments';
import MedicamentsDetails from '../components/medicament/MedicamentsDetails';
import {Icon} from "react-native-elements";

const medicamentStack = createStackNavigator(
    {
      Medicaments: {
          screen : Medicaments,
          navigationOptions: ({navigation}) => ({
              title: 'Medicaments',
              headerRight: () => (
                  <Icon
                      onPress={() => navigation.openDrawer()}
                      name="bars" type="font-awesome" containerStyle={{marginHorizontal: 15}}
                      color="#000"
                  />
              ),
          }),
      },
      MedicamentsDetails: MedicamentsDetails,
    },
    {
      initialRouteName: 'Medicaments',
    }
);

export default medicamentStack;

  