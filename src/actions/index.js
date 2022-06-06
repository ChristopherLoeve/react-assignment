import battlenet from '../apis/battlenet';

export const fetchGuildMembers = () => async dispatch => {
   const response = await battlenet.get('data/wow/guild/tarren-mill/scripes-fan-club/roster?namespace=profile-eu&locale=en_GB&access_token=USHROha5xdLQS5xtusUI6qmjDSeN58vv5W');
   dispatch({type: 'FETCH_MEMBERS', payload: response.data.members});
};

export const fetchCharacterInformation = (characterName) => async dispatch => {
  const response = await battlenet.get('profile/wow/character/tarren-mill/' + characterName.toLowerCase() + '?namespace=profile-eu&locale=en_GB&access_token=USHROha5xdLQS5xtusUI6qmjDSeN58vv5W')
  console.log(response);
  dispatch({type: 'FETCH_CHARACTER', payload: response.data});
}

export const fetchCharacterImage = (apiUrl) => async dispatch => {
  const response = await battlenet.get(apiUrl);
  console.log(response);
  dispatch({type: 'FETCH_IMAGE', payload: response.data})
}

export const selectCharacter = (character) => {
  return {
    type: 'CHARACTER_SELECTED',
    payload: character
  };
}