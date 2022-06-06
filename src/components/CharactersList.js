import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGuildMembers, selectCharacter } from '../actions';
import { Link } from 'react-router-dom'

class CharactersList extends Component {
  componentDidMount(){
    this.props.fetchGuildMembers();
  }


  renderList() {
    return this.props.members.map(member => {
      return (
        <Link to={`/CharacterDetails/${member.character.name}`}>
          <li onClick={() => this.props.selectCharacter(member.character)} className="item" key={member.character.id}>
            <h4>{member.character.name} - Level {member.character.level}</h4>
          </li>
        </Link>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">               
          <h1>My Characters:</h1>
          <ul>
            {this.renderList()}
          </ul>
        </div>
        <div className="col-7"></div>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { 
    members: state.characters
  };
}

export default connect(mapStateToProps, {fetchGuildMembers, selectCharacter})(CharactersList);