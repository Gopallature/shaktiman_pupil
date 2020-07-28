import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../action/index";
import { bindActionCreators } from "redux";

class Herolist extends Component {
  render() {
    return (
      <div>
        <h3>your heros</h3>
        <ul className="list-group">
          {this.props.heros.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  -
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
    heros: state.heros
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Herolist);
