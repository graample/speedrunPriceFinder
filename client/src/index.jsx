import React from 'react';
import axios from 'axios';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("app"));

import Search from './components/Search.jsx';
import List from './components/List.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Typography } from '@mui/material';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTest = this.handleTest.bind(this);

    this.state = {
      user: '',
      list: [],
      worth: 0
    }
  }

  componentDidMount() {
    console.log('finished loading')
  }

  handleSearch(query) {
    // console.log(query)
    axios('http://localhost:3000/', {
      params: {
        query: query
      }
    })
    .then(response => {
      // console.log(response.data.name + ' is worth ' + 'insert price amount here');
      // console.log(response.data.games)
      this.setState({
        user: response.data.name,
        list: response.data.games
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleTest(event) {
    event.preventDefault();
    axios('http://localhost:3000/test')
    .then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleTest}>test route to grample (should be 23)</button>
        <Typography variant="h2">Speedrun Price Finder</Typography>
        <Search handleSearch={this.handleSearch}/>
        <List user={this.state.user} list={this.state.list} worth={this.state.worth}/>
      </div>
    )
  }
}

root.render(<App />);