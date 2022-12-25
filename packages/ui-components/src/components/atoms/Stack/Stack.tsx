import { Stack as StackMui, StackProps as StackPropsMui } from '@mui/material';
import React from 'react';

export interface IStackProps extends StackPropsMui {}

export const Stack: React.FC<IStackProps> = (props) => {
  return <StackMui {...props} />;
};
