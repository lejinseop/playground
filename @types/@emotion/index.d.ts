import { InterpolationWithTheme } from '@emotion/core';
import { Theme as CustomTheme } from '@material-ui/core';

declare module '@emotion/react' {
  interface Theme extends CustomTheme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<CustomTheme>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<CustomTheme>;
    }
  }
}
