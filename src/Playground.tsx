import type { FC } from 'react';
import { css } from '@emotion/react';
import {
  // Button,
  ButtonProps,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Dialog,
  InputBase,
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import {
  withStyles,
  experimentalStyled as styled,
} from '@material-ui/core/styles';
import Button from './Button';

const buttonStyle = (theme: Theme) => css`
  background-color: blue;
  & .MuiButton-label {
    color: ${theme.palette.secondary.main};
  }
`;

// const Button2 = styled(Button)

const tooltipStyle = (theme: Theme) => css`
  background-color: purple;
  & .MuiTooltip-tooltip {
    background-color: ${theme.palette.primary.main};
  }
`;

const Tooltip2 = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
  },
}))(Tooltip);

const Tooltip3 = styled(({ className, ...other }: TooltipProps) => (
  <Tooltip {...other} classes={{ popper: className }} />
))(({ theme }) => ({
  // [`& .${tooltipClasses.tooltip}`]: {
  '& .MuiTooltip-tooltip': {
    backgroundColor: 'yellow',
  },
}));

const Tooltip4 = styled(({ className, ...other }: TooltipProps) => (
  <Tooltip {...other} classes={{ popper: className }} />
))(
  ({ theme }) => `
  background-color: yellow;
  & .MuiTooltip-tooltip: {
    background-color: 'yellow';
  }
`,
);

const lastButtonTestStyle = css`
  background-color: #e4f7ba;
  & .MuiButton-label {
    color: #000;
  }
`;

const dialogStyle = css`
  width: 400px;

  & .MuiDialog-paper {
    width: 400px;
  }
`;

const dateInputStyle = (theme: Theme) => css`
  padding: 0 12px;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 4px;

  & .MuiInputBase-input {
    font-size: 13px;
    padding: 0 12px;
    height: 38px;
    color: ${theme.palette.secondary.main};
  }
`;

const Playground: FC<ButtonProps> = () => {
  return (
    <>
      <Button css={buttonStyle}>hahaha</Button>
      <Tooltip
        css={tooltipStyle}
        title={<span>test1 tooltip</span>}
        // classes={{ tooltip: tooltipStyle }}
        open={true}
      >
        <span>test1111</span>
      </Tooltip>
      <Tooltip2 title={<>test2 tooltip</>} open>
        <span>test2</span>
      </Tooltip2>
      <Tooltip3 title={<>test3 tooltip</>} open>
        <span>test3333</span>
      </Tooltip3>
      <Tooltip4 title={<>test4 tooltip</>} open>
        <span>test4444</span>
      </Tooltip4>
      <Button css={lastButtonTestStyle}>last test</Button>
      <Dialog open={false} css={dialogStyle}>
        <p>HAHAHAH</p>
      </Dialog>
      <InputBase css={dateInputStyle} />
    </>
  );
};

export default Playground;
