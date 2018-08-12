import React from 'react';
import { BuildControl, More, Less, Label } from './style';

const buildControl = ({ label }) => {
  return (
    <BuildControl>
      <Label>{label}</Label>
      <Less>Less</Less>
      <More>More</More>
    </BuildControl>
  );
};

export default buildControl;
