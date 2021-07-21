import type { FC } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Playground2 from './Playground2';

const App: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E5D85C',
      },
      secondary: {
        main: '#2F9D27',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <Playground /> */}
      <Playground2 />
    </ThemeProvider>
  );
};

export default App;
