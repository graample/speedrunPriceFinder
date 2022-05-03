import React from 'react';

import ListItem from './ListItem.jsx';

import { Typography } from '@mui/material';

var List = (props) => {
  var flag = true;
  if (props.user === '') {
    flag = false
  }

  return (
    <div>
      {flag === true ? <Typography variant="h2">{props.user} is worth ${props.worth}</Typography> : ''}
      {
        props.list.map(eachItem => {
          return <ListItem eachItem={eachItem} />
        })
      }
    </div>
  )
}

export default List;