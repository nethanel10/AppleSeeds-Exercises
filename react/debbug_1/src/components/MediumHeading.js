import React from 'react';

const MediumHeading = ({action, text}) => {
  return (<button onClick={action}>{text}</button>);
};

export default MediumHeading;
