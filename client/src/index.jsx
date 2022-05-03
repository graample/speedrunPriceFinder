import React from 'react';
import axios from 'axios';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("app"));

import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    console.log('finished loading')
  }

  handleSearch(event) {
    event.preventDefault();
    console.log('searching...')
  }

  render() {
    return (
      <div>
        <h1>Speedrun Price Finder</h1>
        <Search handleSearch={this.handleSearch}/>
      </div>
    )
  }
}

root.render(<App />);