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
    <Wrapper role='progressbar' aria-valuemin='0' aria-valuemax='100' aria-valuenow={value} style={styles}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} style={styles}></Bar>
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15}; 
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: var(--height);
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
`;


export default ProgressBar;
