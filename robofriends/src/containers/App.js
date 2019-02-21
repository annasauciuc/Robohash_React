import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { searchfield, setSearchField } from "./../actions";
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ animals: users });
      });
  }

  render() {
    const { animals } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredanimals = animals.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !animals.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 green">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList animals={filteredanimals} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
