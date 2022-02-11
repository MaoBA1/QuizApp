import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';


import StartScreen,{screenOptions as StartScreenOptions} from './Start';
import DashboardScreen,{screenOptions as DashboardScreenOptions} from './Dashboard';
import GameScreen,{screenOptions as GameScreenOptions} from './Game';
import EndGameScreen,{screenOptions as EndGameScreenOptions} from './EndGame';

const StartStackNavigator = createStackNavigator();
export const StartStack = () => {
    return(
        <StartStackNavigator.Navigator>
            <StartStackNavigator.Screen
                name='Start'
                component={StartScreen}
                options={StartScreenOptions}
            />

            <StartStackNavigator.Screen
                name='Dashboard'
                component={DashboardScreen}
                options={DashboardScreenOptions}
            />

            <StartStackNavigator.Screen
                name='Game'
                component={GameScreen}
                options={GameScreenOptions}
            />

            <StartStackNavigator.Screen
                name='End Game'
                component={EndGameScreen}
                options={EndGameScreenOptions}
            />

        </StartStackNavigator.Navigator>
    )
}