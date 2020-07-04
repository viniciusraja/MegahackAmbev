import React from 'react';

import StyledBars from './StyledBars'

export default (props) => {
  return (
    <StyledBars innerColor={props.innerColor} outsideColor={props.outsideColor} 
    />
  );
};
