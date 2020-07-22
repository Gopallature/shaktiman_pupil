import React, { Component } from "react";
import { connect } from "react-redux";

class Characterlist extends Component {
  render() {
    console.log(this.props);
    return <div>character</div>;
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}
export default connect(
  mapStateToProps,
  null
)(Characterlist);
