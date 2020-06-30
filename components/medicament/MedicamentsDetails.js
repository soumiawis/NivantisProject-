import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { prixAchatNet,prixVenteNet } from '../../metier/calcule';
import {PricingCard} from "react-native-elements";

class MedicamentsDetails extends Component{

    render(){
      
        let {navigation} = this.props;

        let prixbrut = navigation.getParam('prixBrut');
        let name = navigation.getParam('name');
        let taux =navigation.getParam('taux');
        let coeff_multiplicateur = navigation.getParam('coeff');

        let prix_achat_net = prixAchatNet( prixbrut, taux );
        let prix_vente_net = prixVenteNet( prix_achat_net, coeff_multiplicateur);
       
        return(

            <View style={{ flex: 1 }}>
                    <PricingCard
                        color="#4f9deb"
                        title={name}
                        price={prixbrut + ' €'}
                        info={[`Taux = ${taux}`, `Prix de vente =  ${prix_vente_net} €`, `Prix achat net =  ${prix_achat_net} €`, `Coefficient multiplicateur =  ${coeff_multiplicateur}`]}
                        button={<Text></Text>}
                    />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20,
     
    },
    item:{
        marginTop: 24,
        padding: 10,
        fontSize : 24,
        paddingHorizontal: 20,
    }
    
  });
export default MedicamentsDetails