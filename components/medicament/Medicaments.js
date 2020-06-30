import React, { Component } from 'react'
import { View, Text,StyleSheet,FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import * as repository from '../../repository/repositorieV1';
import {getMedicaments} from '../../service/service';
import {Icon} from "react-native-elements";


class Medicaments extends Component {

    constructor(){
        super()

        this.state = {
            medicaments : []
        }
    }

    componentDidMount() {
        this.setState({
            medicaments :  getMedicaments(repository)
        })
    }

    render() {

        let {navigation}  = this.props;
        let {medicaments} = this.state;

        return (
            <View style={styles.container}>
            <FlatList testID="flatList"
                data ={medicaments}
                renderItem={ ({item})=> (
                    <View style={{
                        paddingVertical:10, paddingHorizontal:10, borderBottomWidth:1, borderColor: '#dbdbdb', marginBottom : 5}}>
                        <TouchableWithoutFeedback onPress={ () => navigation.navigate('MedicamentsDetails', item)}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                <View>
                                    <View><Text style={{fontSize: 20, fontWeight : 'bold', color:'#317b82', textTransform: 'capitalize'}}>{item.name}</Text></View>
                                </View>
                                <View style={{justifyContent: 'center'}}>
                                        <Icon name="chevron-right" type="font-awesome" iconStyle={{color:'#879e9a',fontWeight: 'normal', fontSize: 15}} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                )}
                keyExtractor ={ (item) => item.id+''} />
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 5,

    },
    item:{
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor:'pink',
        fontSize : 20


    }
    
  });
  
export default Medicaments;