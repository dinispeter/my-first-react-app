import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


import "./App.css";

class App extends Component {
    constructor() {
    super();
      this.state = {
        monsters: [],
        searchField: ""
      }

    };


componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>
    response.json())
    .then(users => this.setState({monsters: users}))
}

handleChange = (e) => {
  console.log(e.target.value);
  this.setState({searchField: e.target.value})
}

render() {
  const {monsters, searchField } = this.state; // object destructoring
  const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())

  )

  return (
      <div className="App">
        <h1>Monsters Page</h1>
        <br />
        <SearchBox
          placeholder="search monsters...."
          handleChange={this.handleChange}/>


        <CardList monsters={filteredMonsters} />
      </div>

      );
    }
  }

export default App;
