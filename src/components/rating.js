import React, { Component } from "react";
import { connect } from "react-redux";

class Rating extends Component {
  strength() {
    let strength = 0;
    this.props.heros.forEach(hero => (strength += hero.strength));
    return strength;
  }

  iq() {
    let iq = 0;
    this.props.heros.forEach(inteli => (iq += inteli.intelligence));
    return iq;
  }

  speed() {
    let speed = 0;
    this.props.heros.forEach(speed_1 => (speed += speed_1.speed));
    return speed;
  }

  render() {
    return (
      <div>
        <h3>total point</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>total strength::</b>
            {this.strength()}
          </li>

          <li className="list-group-item">
            <b>IQ::</b>
            {this.iq()}
          </li>
          <li className="list-group-item">
            <b>Speed::</b>
            {this.speed()}
          </li>
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

export default connect(
  mapStateToProps,
  null
)(Rating);
