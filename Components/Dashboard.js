import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Styles from '../Utilities/AppStyle';

 
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Colors from '../Utilities/AppColors'


const Dashboard = props => {
        

    return (
        <View style={Styles.dashboardContainer}>
            <View style={Styles.dashboardTitleView}>
                <Text style={Styles.dashboardTitleText}>Categories</Text>
            </View>
            
            <View style={Styles.categoryViewStyle}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:26})} style={Styles.categoryItemBtn}>
                            <Text style={Styles.categoryItemText}>Celebrities</Text>
                            <Ionicons name="people" size={30} style={Styles.categoryItemIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:27})} style={Styles.categoryItemBtn}>
                            <Text style={Styles.categoryItemText} >Animals</Text>
                            <FontAwesome5 name="dog" size={30} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:18})} style={Styles.categoryItemBtn}>                    
                            <Text style={Styles.categoryItemText} >Computer sience</Text>
                            <MaterialIcons name="computer" size={30} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:12})} style={Styles.categoryItemBtn}>                    
                            <Text style={Styles.categoryItemText} >Music</Text>
                            <FontAwesome name="music" size={30} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:21})} style={Styles.categoryItemBtn}>                    
                            <Text style={Styles.categoryItemText} >Sports</Text>
                            <MaterialIcons name="sports-basketball" size={30} color="black"/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Game',{categoryNumber:28})} style={Styles.categoryItemBtn}>                    
                            <Text style={Styles.categoryItemText} >Vehicles</Text>
                            <FontAwesome name="car" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
            
                

                
        </View>
    )
}



export const screenOptions = navData => {
    return{
        headerTitle:'Dashboard',
        headerShown: false
        
    }
};

export default Dashboard;