import React from 'react';

import { Typography, TextField, Button } from '@mui/material';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuery = this.handleQuery.bind(this);
    this.searchHandler = this.searchHandler.bind(this);

    this.state = {
      query: ''
    }
  }

  handleQuery(event) {
    this.setState({
      query: event.target.value
    })
  }

  searchHandler(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
  }

  render() {
    return (
      <div>
        <Typography>type in a speedrun.com username (exact case)</Typography>
        <form>
          <TextField
          id="standard-basic"
          label="SRC username"
          variant="standard"
          onChange={this.handleQuery}
          ></TextField>
          <Button
          onClick={this.searchHandler}
          variant="outlined"
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;