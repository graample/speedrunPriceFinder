import React from 'react';

var Search = (props) => {
  var searchHandler = (event) => {
    event.preventDefault();
    console.log('sup')
  }

  return (
    <div>
      type in a speedrun.com username
      <form>
        <input type="text"></input>
        <button onClick={props.handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default Search;