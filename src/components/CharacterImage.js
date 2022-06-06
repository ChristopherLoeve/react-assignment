import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCharacterImage } from '../actions';

class CharacterImage extends Component {
  componentDidMount() {
    console.log(this.props.selectedCharacter)
    this.props.fetchCharacterImage(this.props.selectedCharacter.media.href);
  }



  render() {
    return (
      <div className="container" >
        <div>
          <p>Test</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    selectedCharacter: state.selectedCharacter,
    imageUrl: state.imageUrl
  };
}


export default connect(mapStateToProps, { fetchCharacterImage })(CharacterImage);