import PropTypes from 'prop-types';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import themeTypography from './typography';
import themePalette from './palette';
import ComponentsOverrides from './overrides';
import React from 'react';

ThemeConfig.propTypes = {
    children: PropTypes.node
  };
  
  export default function ThemeConfig({ children }) {
    const themeOptions = {
        palette: themePalette(),
        typography: themeTypography(),
    };

    const themes = createTheme(themeOptions);
    themes.components = ComponentsOverrides(themes); 

    return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
