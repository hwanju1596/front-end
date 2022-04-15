import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { useTheme, styled } from '@mui/material/styles';

const Main = styled('main')(({theme}) => ({
    ...theme.typography.mainContent
}));

function MainLayout() {
    const theme = useTheme();
    return (
   <>
   </>
    );
};

export default MainLayout;