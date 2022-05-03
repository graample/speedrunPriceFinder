import React from 'react';

import ListItem from './ListItem.jsx';

var List = (props) => {
  var flag = true;
  if (props.user === '') {
    flag = false
  }

  return (
    <div>
      {flag === true ? <h1>{props.user} is worth ${props.worth}</h1> : ''}
      {
        props.list.map(eachItem => {
          return <ListItem eachItem={eachItem} />
        })
      }
    </div>
  )
}

export default List;