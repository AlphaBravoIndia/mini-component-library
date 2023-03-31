/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px'
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px'
  },
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Progress max="100" value={value} style={styles}></Progress>
  )
};

const Progress = styled.progress`
  height: var(--height);
  -webkit-appearance: none;
   appearance: none;
   

  ::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15}; 
    border-radius: var(--borderRadius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
  }
  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 4px ${p => p.value >= 99 ? 4 : 0}px ${p => p.value >= 99 ? 4 : 0}px 4px;
  }
`;

export default ProgressBar;
