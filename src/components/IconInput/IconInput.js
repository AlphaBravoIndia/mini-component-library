import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: '0.875rem',
    height: '1.5rem',
    borderBottom: `1px solid ${COLORS.black}`,
    strokeWidth: 1,
    iconSize: 16,
  },
  large: {
    fontSize: '1.125rem',
    height: '2.25rem',
    borderBottom: `2px solid ${COLORS.black}`,
    strokeWidth: 2,
    iconSize: 24,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  return (
  <Wrapper htmlFor={label}>
    <VisuallyHidden>
      {label}
    </VisuallyHidden>
    <IconWrapper style={{ '--height': styles.iconSize + 'px'}}>
      <Icon id={icon} size={styles.iconSize} strokeWidth={styles.strokeWidth} />
    </IconWrapper>
    <TextInput
      {...delegated}
      style={{
        '--width': width + 'px',
        '--height': styles.height,
        '--fontSize': styles.fontSize,
        '--borderBottom': styles.borderBottom,
        }}
        name={label} id={label}/>
  </Wrapper>);
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderBottom);
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
`;

export default IconInput;
