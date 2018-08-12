import React from 'react';
import { BuildControl, More, Less, Label } from './style';

const buildControl = ({ label, added }) => {
  return (
    <BuildControl>
      <Label>{label}</Label>
      <Less>Less</Less>
      <More onClick={added}>More</More>
    </BuildControl>
  );
};

export default buildControl;
