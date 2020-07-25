import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterById } from "../action/index";
import "../styles/index.css";
class Characterlist extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(character.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacterById }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characterlist);
