import { GET_CELEBRITIES_QUEST, GET_COMPUTER_QUEST, GET_ANIMALS_QUEST, GET_MUSIC_QUEST, GET_SPORT_QUEST, GET_VEHICLES_QUEST } from './actions';

const initialState = null;

export default (state = initialState, action) =>{    
    return{
        ...state,
        questions: action.myData 
    }
}
