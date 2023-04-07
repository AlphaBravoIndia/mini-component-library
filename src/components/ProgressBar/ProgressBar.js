/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
    borderRadius: '4px',
    
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
  },
  large: {
    height: '24px',
    borderRadius: '8px',
    padding: '4px',
  }
}

const ProgressBar = ({ value, size }) => {

  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
  <Wrapper
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    style={{
      '--padding': styles.padding,
      '--borderRadius': styles.borderRadius
  }}>
    <BarWrapper>
      <Bar style={{
        '--width': value + '%',
        '--height': styles.height}}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </BarWrapper>
  </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
  border-radius: 4px 0px 0px 4px;
`;



export default ProgressBar;
