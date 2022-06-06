import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { fetchCharacterInformation } from '../actions'

class CharacterDetails extends Component {
  componentDidMount() {
    console.log(this.props.selectedCharacter);
    this.props.fetchCharacterInformation(this.props.selectedCharacter.name);
    console.log(this.props.character);
  }



  render() {
    return (
      <div className="container" >
        {/* Only works after loading the page for the first time */}
        <div>
          <h4>Name: {this.props.character.name}</h4>
          <h4>Level: {this.props.character.level}</h4>
          <h4>Race: {this.props.character.race.name}</h4>
          <h4>Class: {this.props.character.character_class.name}</h4>
          <h4>Spec: {this.props.character.active_spec.name}</h4>
        </div> 

        <Link to={'/'}>
          <button>
            Back
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    selectedCharacter: state.selectedCharacter,
    character: state.character 
  };
}


export default connect(mapStateToProps, { fetchCharacterInformation })(CharacterDetails);