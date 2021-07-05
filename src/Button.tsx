import type { FC } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import type { ButtonProps } from '@material-ui/core';
import { css } from '@emotion/react';

const buttonDefaultStyle = css`
  background-color: #0054ff;
  & .MuiButton-label {
    color: #fff;
  }
`;

const Button: FC<ButtonProps> = (props) => {
  return <MuiButton css={buttonDefaultStyle} {...props} />;
};

export default Button;
