import React from 'react';
import { BuildControl, More, Less, Label } from './style';

const buildControl = ({
  label,
  added,
  removed,
  disabled
}) => {
  return (
    <BuildControl>
      <Label>{label}</Label>
      <Less onClick={removed} disabled={disabled}>
        Less
      </Less>
      <More onClick={added}>More</More>
    </BuildControl>
  );
};

export default buildControl;
