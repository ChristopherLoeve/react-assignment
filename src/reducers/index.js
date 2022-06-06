import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

const selectedCharacterReducer = (selectedCharacter = null, action) => {
    if (action.type === 'CHARACTER_SELECTED') {
        return action.payload;
    }
    return selectedCharacter;
}

const fetchCharacterReducer = (fetchedCharacter = null, action) => {
    if (action.type === 'FETCH_CHARACTER') {
        console.log(action.payload)
        return action.payload
    }
    return fetchedCharacter;
}

const fetchCharacterImage = (fetchedImageUrl = null, action) => {
    if (action.type === 'FETCH_IMAGE') {
        console.log(action.payload);
        return action.payload;
    }
    return fetchedImageUrl;
}

export default combineReducers ({
    characters: charactersReducer,
    selectedCharacter: selectedCharacterReducer,
    character: fetchCharacterReducer,
    imageUrl: fetchCharacterImage
});