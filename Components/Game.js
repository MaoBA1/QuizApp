import React,{ useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, Modal } from 'react-native';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import Boolean from './boolean';
import Multipale from './multipale';

const Game = props => {
    const categoryNumber = props.route.params.categoryNumber; 
    const [questionsArr,setQuestionsArr] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(1);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [isDataSet,setIsDataSet] = useState(false); 
    const [isReady,setIsReady] = useState(true); 
    const [timer,setTimer] = useState(30);
    const [isVisible, setIsVisible] = useState(false);  
    const [message, setMessage] = useState(''); 
    const [subMessage, setSubMessage] = useState('');
    const [pictureRout, setPictureRout] = useState('failed_character.png');
    const [color, setColor] = useState('');
    const [incorrectArr,setIncorrectArr] = useState([]);
    const [isClickedToEnd,setIsClickedToEnd] = useState(false);
    const [isExitModalVisible,setIsExitModalVisible] = useState(false);
    let timeRemaining = null;     
    const dispatch = useDispatch();

    const getCategory = async () => {        
        let action = actions.getQuestByCategory(categoryNumber);
        try {            
            await dispatch(action);
            const responseData = await categories.questions.results;            
            let questionId = 0;
            if(questionsArr.length < 50){
                responseData.forEach(quest => {
                    let answerArr = [];
                    answerArr.push(quest.correct_answer,...quest.incorrect_answers);
                    answerArr.sort(() => Math.random() - 0.5);
                    const formattedData = {
                        id:questionId++,
                        category:quest.category,
                        correctAnswer:quest.correct_answer,
                        allAnswer:answerArr,
                        difficulty:quest.difficulty,
                        question:quest.question,
                        type:quest.type
                    }
                    questionsArr.push(formattedData);
                })
                setIsDataSet(true);
            }
              
        } catch (err) {
            console.log(err.message);
        }
    };
    const categories =  useSelector(state => (state.allCategories));

    const moveQuestion = () => {
        if(currentQuestion < 20){                                     
            clearTimeout(timeRemaining);
            setIsReady(false);                                  
            setCurrentIndex(currentIndex + Math.round(Math.random()*2)+1);
            setCurrentQuestion(currentQuestion+1);
            if(currentQuestion<10)
                setTimer(30);
            else if(currentQuestion>=10 && currentQuestion<15)
                setTimer(15);
            else
                setTimer(10);
            setIsReady(true);
        }
        else{            
            clearTimeout(timeRemaining);
            if(incorrectArr.length < 10){
                setMessage('GREAT JOB');
                if(incorrectArr.length == 0)
                    setSubMessage('You answered all\nquestions correctly');
                else
                    setSubMessage('You answered over\n10 questions correctly');
                setPictureRout(require('../assets/app_icons_and_pictures/success_character.png'));
                setColor('#28bd59'); 
                setIsVisible(true);               
            }
            else{
                setMessage('FAILED');
                setSubMessage('Tou need to answer\n 10 correct answers');                                
                setPictureRout(require('../assets/app_icons_and_pictures/failed_character.png'));
                setColor('#f24005');
                setIsVisible(true);                                
            }
            
        }
    };

    const reward = answer => {
        
        if(answer != questionsArr[currentIndex].correct_answer ){            
            const incorrectItem = {
                id:incorrectArr.length,
                questionsDetails:questionsArr[currentIndex],
                userAnswer:answer
            }
            incorrectArr.push(incorrectItem);
        }        
        moveQuestion();
    };

    const gameOver = () => { 
               
        setIsVisible(false);
        setIsClickedToEnd(true);
        props.navigation.navigate('End Game',{incorrect:incorrectArr})
    };

    const levelColor = difficulty =>{
        switch(difficulty) {
            case 'easy':
                return 'green';
            case 'medium':
                return '#ffd505';
            default:
                return 'red';
            
        }
   }

   const timerColor = time =>{
        if(time>20)
            return 'green';
        else if(time>10 && time<=20)
            return '#ffd505';
        else
            return 'red'; 
    }

    const leaveOrNot = yesNo =>{
        if(yesNo == 'yes'){
            props.navigation.navigate('Start');                        
            setIsExitModalVisible(false);
            setIsDataSet(false);
            setQuestionsArr([]);
        }
        else
            setIsExitModalVisible(false);
    }

    useEffect(() => {
        if(!isDataSet)
            getCategory();        
    })

    useEffect(() => {        
        if(timer > 0 && isReady){
            timeRemaining = setTimeout(() => {
                setTimer( timer - 1);
            },1000)
        }
        else{
            if(currentQuestion<20){                
                incorrectArr.push({id:incorrectArr.length,questionsDetails:questionsArr[currentIndex],userAnswer:''});                               
                moveQuestion();
            }
            else{
                setIsReady(false);                                
                moveQuestion();
            }
        }
    })
    
    return(
        <View style={Styles.gameContainer}>
            <Modal
                animationType='slide'
                visible={isExitModalVisible}
            >
                <View style={{ backgroundColor: Colors.gray_text, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{
                        width: '70%',
                        padding: 30,
                        margin: 30,
                        borderRadius: 10,
                        shadowColor: Colors.black,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 20,
                        alignItems: 'center',
                        backgroundColor: Colors.white
                    }}>

                        <Image source={require('../assets/app_icons_and_pictures/logo.png')} style={{ width: 100, height:150, resizeMode: 'contain' }} />
                        <Text style={{fontFamily:'Poppins-Bold',color:Colors.blue2, width:160, fontSize:20}}>You're sure you want to leave?</Text>
                        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => leaveOrNot('yes')} style={{backgroundColor:Colors.blue2, alignItems:'center', width:'40%', paddingVertical:20, borderRadius:10, marginTop:12}}>
                                <Text style={{fontFamily:'Poppins-Bold',color:Colors.white}}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => leaveOrNot('no')} style={{marginLeft:15 ,backgroundColor:Colors.blue2, alignItems:'center', width:'40%', paddingVertical:20, borderRadius:10, marginTop:12}}>
                                <Text style={{fontFamily:'Poppins-Bold',color:Colors.white}}>No</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </Modal>

            <Modal
                animationType='slide'
                visible={isClickedToEnd? false : isVisible}                               
            >
              <View style={Styles.modalMainView}>
                <View style={{
                        width:'100%',
                        height:'12%',
                        backgroundColor:color,
                        alignItems:'flex-end',
                        justifyContent: 'center',
                        paddingHorizontal:15
                    }}>
                    
                    <Image
                        source={require(`../assets/app_icons_and_pictures/logo.png`)}
                        style={{width:50, height:50,marginTop:25}}
                    />
                </View>

                <View style={{width:'100%', height:'88%', alignItems:'center'}}>
                    <View style={{marginTop:40}}>
                        <Text style={{fontFamily:'Poppins-Bold', fontSize:40, color:color}}>{message}</Text>
                    </View>

                    <View style={{width:'60%', alignItems:'center'}}>
                        <Text style={{fontFamily:'Poppins-Medium', fontSize:20, color:Colors.grey}}>{subMessage}</Text>
                    </View>

                    <Image
                        source={pictureRout}
                        style={{width:332, height:400,marginTop:25}}
                    />

                    <TouchableOpacity onPress={() => gameOver()} style={{marginTop:20 ,backgroundColor:color, width:200, height:100, justifyContent: 'center',alignItems:'center', borderRadius:10}}>
                        <Text style={{fontFamily:'Poppins-Bold', fontSize:20, color:Colors.grey}}>Let's see the{'\n'}    answers</Text>
                    </TouchableOpacity>
                </View>

              </View>  
                
            </Modal>

             <View style={Styles.gameTitle}>
                 <TouchableOpacity onPress={() => setIsExitModalVisible(true)} style={{width:'20%', height:50, backgroundColor:Colors.white, padding:10, borderRadius:10,alignItems:'center', justifyContent: 'center', borderRadius:10}}>
                     <Text style={{fontFamily:'Poppins-Bold', color:Colors.grey}}>Leave</Text>
                 </TouchableOpacity>
                <Text style={{fontFamily:'Poppins-Bold', fontSize:20, color:Colors.white1, width:'60%', marginLeft:25}}>Question {currentQuestion}/20</Text>
                <Image
                    source={require('../assets/app_icons_and_pictures/logo.png')}
                    style={{width:50, height:50}}
                />
            </View>

            <View style={Styles.gameMiddelContainer}>
                {                    
                    isDataSet ?
                    (
                         <View style={{alignItems: 'center', width:'100%'}}>
                            <View>
                                <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:Colors.blue2}}>{questionsArr[0].category} </Text>
                            </View>

                            <View style={Styles.levelStyle}>                                
                                <Text style={{fontFamily:'Poppins-Bold', fontSize:20, color:Colors.grey}}>Level: </Text>
                                <Text style={{fontFamily:'Poppins-Bold', fontSize:20, color:levelColor(questionsArr[currentIndex].difficulty)}}>{questionsArr[currentIndex].difficulty}</Text>
                            </View>
                            <View style={Styles.questionView}>
                                <Text style={{fontFamily:'Poppins-Medium', fontSize:20}}>{questionsArr[currentIndex].question}</Text>
                            </View>                                                
                            { 
                                                           
                                questionsArr[currentIndex].type == "boolean"?
                                (
                                   <Boolean 
                                        ans={questionsArr[currentIndex].allAnswer}
                                        func={reward}
                                        case={1}
                                   />
                                )
                                :
                                (
                                    <Multipale 
                                        ans={questionsArr[currentIndex].allAnswer}
                                        func={reward}
                                        case={1}
                                    /> 
                                )
                            }
                            <View style={Styles.clockView}>
                                <Text style={{fontSize:20, fontFamily:'Poppins-Bold', color:timerColor(timer)}}>0:{timer > 9 ? timer : '0'+timer}</Text>
                            </View>
                        </View>                       
                    )
                    :
                    (
                        <ActivityIndicator size='large' color={Colors.greenBlue} style={{marginTop:300}}/>
                    )
                }
                
            </View>
        </View>
    )


};

export const screenOptions = navData => {
    return{
        headerTitle:'Start',
        headerShown: false,
        gestureEnabled:false,
    }
};

export default Game;