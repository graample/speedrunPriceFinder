import React from 'react';

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
        type in a speedrun.com username (exact case)
        <form>
          <input type="text" onChange={this.handleQuery}></input>
          <button onClick={this.searchHandler}>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;