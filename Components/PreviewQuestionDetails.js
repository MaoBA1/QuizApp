import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';
import Boolean from './boolean';
import Multipale from './multipale';

const PreviewQuestionDetails = props => {
    const quest = props.question.questionsDetails.question;
    const answers = props.question.questionsDetails.allAnswer;
    const correctAnswer = props.question.questionsDetails.correctAnswer;
    const userAnswer = props.question.userAnswer;
    const questType = props.question.questionsDetails.type

    const setColor = answer => {
        if(answer == correctAnswer) 
            return '#28bd59' 
        else if (answer == userAnswer)
            return '#f24005' 
        else Colors.grey
    }

    return(
        <View style={Styles.previewQuestionsDetailsContainer}>
            
            <View style={{alignItems: 'center', width:'100%'}}>

                
                <View style={Styles.questionView}>
                    <Text style={{fontFamily:'Poppins-Medium', fontSize:20}}>{quest}</Text>
                </View>                                                
                { 
                                                
                    questType == "boolean"?
                    (
                        <Boolean 
                            ans={answers}
                            setColor={setColor}
                            case={2}
                            
                        />
                    )
                    :
                    (
                        <Multipale 
                            ans={answers}
                            setColor={setColor}
                            case={2}
                        /> 
                    )
                }                
            </View>               
        
        </View>
    )
}



export default PreviewQuestionDetails;