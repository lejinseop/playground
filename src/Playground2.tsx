import { useState } from 'react';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, ButtonProps, InputBase } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import type { Theme } from '@material-ui/core';

interface SampleButtonStyleProps {
  happyColor: string;
}

const StyledButton = styled(Button)`
  background-color: purple;
  & .MuiButton-label {
  }
`;

const buttonStyle = (theme: Theme, props: SampleButtonStyleProps) => css`
  background-color: ${props.happyColor};
  & .MuiButton-label {
    color: ${theme.palette.secondary.main};
  }
`;

const inputBaseStyle = css`
  &.MuiInputBase-root {
    border: 1px solid red;
  }

  & .MuiInputBase-input {
    font-weight: bold;
  }
`;

const dialogStyle = css`
  & .MuiDialog-paper {
    width: 400px;
  }
`;

const Playground2: FC<ButtonProps> = () => {
  const [color, setColor] = useState<string>('yellow');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setColor((prev) => {
      if (prev === 'yellow') {
        return 'red';
      }

      return 'yellow';
    });
  };
  return (
    <>
      <StyledButton>hahaha2</StyledButton>
      <Button
        css={(theme) => buttonStyle(theme, { happyColor: color })}
        onClick={handleClick}
      >
        haha testaaa
      </Button>
      <InputBase css={inputBaseStyle} />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        css={dialogStyle}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Playground2;
