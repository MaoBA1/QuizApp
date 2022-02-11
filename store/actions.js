export const GET_CELEBRITIES_QUEST = 'GET_CELEBRITIES_QUEST';
export const GET_COMPUTER_QUEST = 'GET_COMPUTER_QUEST';
export const GET_ANIMALS_QUEST = 'GET_ANIMALS_QUEST';
export const GET_MUSIC_QUEST = 'GET_MUSIC_QUEST';
export const GET_SPORT_QUEST = 'GET_SPORT_QUEST';
export const GET_VEHICLES_QUEST = 'GET_VEHICLES_QUEST';

const baseUrl = 'https://opentdb.com/api.php?amount=100';


export const getQuestByCategoryDispatch = (data,category) => {
    return dispatch => {
        switch (category) {
            case 26:
                dispatch({ type:GET_CELEBRITIES_QUEST, myData:data });                
                break;
            case 18:
                dispatch({ type:GET_COMPUTER_QUEST, myData:data });                
                break;
            case 27:
                dispatch({ type:GET_ANIMALS_QUEST, myData:data });                
                break;
            case 12:
                dispatch({ type:GET_MUSIC_QUEST, myData:data });                
                break;
            case 21:
                dispatch({ type:GET_SPORT_QUEST, myData:data });                
                break;
            case 28:
                dispatch({ type:GET_VEHICLES_QUEST, myData:data });                
                break;                
            default:
                return;
        }
        
    }

};

export const getQuestByCategory = (category) =>{
    return async dispatch =>{
        try{
            const response = await fetch(`${baseUrl}&category=${category}`,{
                method: 'GET'
            });
            const data = await response.json();
            if(data){
                //console.log(data);
                dispatch(getQuestByCategoryDispatch(data,category))
            }
            else{
                let message = 'Something went wrong';
                console.log(message);
                throw new Error(message);
            }
        }
        catch(err){
            let message = 'Something went wrong';
            console.log(message);
            throw new Error(message);
        }
    }
};