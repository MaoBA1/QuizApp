import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';

const Multipale = props => {    
    const answers = props.ans;
    const func = props.func;
    const setColor = props.setColor;
    return(
        <View style={Styles.answersView}> 
            {
                props.case==1?
                (
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => func(answers[0])} style={Styles.answersItemView}>
                            <Text style={Styles.answerText}>{answers[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => func(answers[1])} style={Styles.answersItemView}>
                            <Text style={Styles.answerText}>{answers[1]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => func(answers[2])} style={Styles.answersItemView}>
                            <Text style={Styles.answerText}>{answers[2]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => func(answers[3])} style={Styles.answersItemView}>
                            <Text style={Styles.answerText}>{answers[3]}</Text>
                        </TouchableOpacity> 
                    </View>
                )
                :
                (
                    <View style={{width: '100%', alignItems:'center'}}>
                        <View style={Styles.answersItemView}>
                            <Text style={{fontFamily:'Poppins-Bold', fontSize:18, color: setColor(answers[0])}}>{answers[0]}</Text>
                        </View>

                        <View style={Styles.answersItemView}>
                            <Text style={{fontFamily:'Poppins-Bold', fontSize:18, color: setColor(answers[1])}}>{answers[1]}</Text>
                        </View>

                        <View style={Styles.answersItemView}>
                            <Text style={{fontFamily:'Poppins-Bold', fontSize:18, color: setColor(answers[2])}}>{answers[2]}</Text>
                        </View>

                        <View style={Styles.answersItemView}>
                            <Text style={{fontFamily:'Poppins-Bold', fontSize:18, color: setColor(answers[3])}}>{answers[3]}</Text>
                        </View> 
                    </View>
                )
            }                                  
                                               
        </View> 
    )
}

export default Multipale;

