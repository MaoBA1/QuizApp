import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';
import PreviewQuestionDetails from './PreviewQuestionDetails';

const End = props => {
    const data = props.route.params.incorrect;
    const [isExitModalVisible,setIsExitModalVisible] = useState(false);
    let count = 0;
    console.log(data);
    const calcCorrectAnswers = () =>{
        data.forEach(answer => 
            answer.userAnswer == answer.questionsDetails.correctAnswer? count++ : count
        )
        return count;
    }

    useEffect (() => {
        if(isExitModalVisible){
            setTimeout(() => {
                props.navigation.navigate('Start');
                setIsExitModalVisible(false);
            },3000)
        }
    });
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
                        <Text style={{fontFamily:'Poppins-Bold',color:Colors.blue2, width:160, fontSize:20}}>Good bye...</Text>
                    </View>

                </View>

            </Modal>

            <View style={Styles.endGameTitle}>
                 <TouchableOpacity onPress={() => setIsExitModalVisible(true)} style={{width:'20%', height:50, backgroundColor:Colors.white, padding:10, borderRadius:10,alignItems:'center', justifyContent: 'center', borderRadius:10}}>
                     <Text style={{fontFamily:'Poppins-Bold', color:Colors.grey}}>Leave</Text>
                 </TouchableOpacity>

                <Text style={{fontFamily:'Poppins-Bold', fontSize:20, color:Colors.white1, width:'60%', marginLeft:25}}>Let's see your answer...</Text>
                <Image
                    source={require('../assets/app_icons_and_pictures/logo.png')}
                    style={{width:50, height:50}}
                />
            </View>

            <View style={{alignItems: 'center',backgroundColor:Colors.white,paddingVertical:10}}>
                <Text style={{fontFamily:'Poppins-Bold', fontSize:30, color:Colors.grey}}>Correct Answers : {calcCorrectAnswers()}/20</Text>
            </View>
            
            <FlatList
             data={data}
             keyExtractor={item => item.id}
             renderItem={ questItem => <PreviewQuestionDetails question = {questItem.item}/>}                    
            />
        
        </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle:'Game Over',
        headerShown: false,
        gestureEnabled:false,
    }
};

export default End;