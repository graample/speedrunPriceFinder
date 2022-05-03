import React from 'react';

import { Typography } from '@mui/material';

var ListItem = (props) => {
  return (
    <div>
      <Typography>{props.eachItem}</Typography>
    </div>
  )
}

export default ListItem;