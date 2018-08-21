import React from 'react';

const drawerToggle = ({ clicked, ...props }) => (
  <div onClick={clicked} {...props}>
    MENU
  </div>
);
export default drawerToggle;
