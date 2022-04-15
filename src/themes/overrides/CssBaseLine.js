import React from 'react'

export default function CssBaseLine(theme) {
  return {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                padding: '0',
                margin: '0',
            },
        },
    }
  }
}
