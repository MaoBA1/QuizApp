import {StyleSheet} from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({

    dashboardContainer:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
               
    },

    dashboardTitleView:{
        width:'100%',
        height:'15%',
        backgroundColor: Colors.blue2,
        alignItems: 'center',
        justifyContent: 'center',
        padding:30
    },
    dashboardTitleText:{
        fontFamily:'Poppins-Bold',
        fontSize:30, 
        color:Colors.white1,
        marginTop:20
    },
    categoryViewStyle:{
        width:'100%',
        height:'85%',
        alignItems: 'center',       
        backgroundColor: Colors.white1,
        padding:10
    },
    categoryItemBtn:{
        width:'80%',
        height:70,
        backgroundColor: Colors.blue2,
        alignItems: 'center',
        justifyContent:'center',
        margin:20,
        padding:20,
        flexDirection:'row',
        borderRadius:10
    },
    categoryItemText:{
        width:'85%',
        fontSize:23,
        fontFamily:'Poppins-Bold',        
        color:Colors.white1,
        marginRight:10
        
    },
    categoryItemIcon:{
        width:'15%',
        
    },
    startContainer:{
        flex: 1,
        backgroundColor: Colors.white1,
        alignItems: 'center', 
        justifyContent:'center',        
    },    
    imageStyle:{
        width:328,
        height:515,
        shadowColor: Colors.black,        
        shadowOpacity: 10,
        shadowOffset: {
            width: 3,
            height: 5,
        },
        resizeMode:'cover',
    },
    startBtn:{
        width:'65%',
        height:70,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colors.white1,
        marginTop:30,
        borderRadius:20,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 15,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    gameMiddelContainer:{
        height:'88%',
        backgroundColor: '#fff',
        alignItems: 'center',                
    },
    gameContainer:{
        flex: 1,
    },
    gameTitle:
    {
        height:110,
        backgroundColor: Colors.grey2,
        flexDirection:'row',
        paddingTop:35,
        paddingHorizontal:15,
        alignItems: 'center',
    },
    questionView:{
        width:'90%',
        height:170,
        margin:20,
        backgroundColor: Colors.platinum,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    answersView:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        
    },
    answersItemView:{
        backgroundColor: Colors.greenBlue,
        width:'90%',
        height:50,
        margin:15,
        borderRadius:20,
        alignItems: 'center',
        justifyContent:'center'
    },
    answerText:{
        fontFamily:'Poppins-Bold',
        fontSize:18,
        color: Colors.grey
    },
    levelStyle:{
        paddingHorizontal:40,
        paddingTop:10,
        flexDirection:'row',
    },
    clockView:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        borderWidth:10,
        borderColor:Colors.blue2,
        width:100,
        height:100,        
        borderRadius:50
    },
    modalMainView:{
        flex:1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        
    },
    previewQuestionsDetailsContainer:{
        height:550,
        backgroundColor: '#fff',
        alignItems: 'center',                
    },
    endGameTitle:
    {
        height:110,
        backgroundColor: Colors.grey2,
        flexDirection:'row',
        paddingTop:35,
        paddingHorizontal:10,
        alignItems: 'center',
    },
});