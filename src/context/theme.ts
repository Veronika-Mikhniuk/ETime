import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        icons: {
            headerIcon: string
            headerIconHover: string
        }
        buttons: {
            secondary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
        }
        shadow: {
            boxShadow: string
        }
        border: {
            headerBorder: string
        }
    }
    interface PaletteOptions {
        icons?: {
            headerIcon: string
            headerIconHover: string
        }
        buttons?: {
            secondary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
        }
        shadow: {
            boxShadow: string
        }
        border: {
            headerBorder: string
        }
    }
}

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f3f4f6',
            paper: '#ffffff'
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
        icons: {
            headerIcon: '#696969',
            headerIconHover: '#b4b4b4',
        },
        buttons: {
            secondary: {
                bg: '#e3f2fd',
                bgHover: '#cde3f5ee',
                ripple: 'rgba(161, 203, 237, 0.92)',
                text: '#1976d2',
                border: '#e3f2fd'
            }
        },
        shadow: {
            boxShadow: '0 13px 35px #00000014'
        },
        border: {
            headerBorder: '1px solid #ebeced'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                '.text-secondary': {
                    color: theme.palette.text.secondary
                }
            })
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        background: {
            default: '#1a1a1a',
            paper: '#1f1f1f'
        },
        text: {
            primary: '#ffffff',
            secondary: '#c0c0c0',
        },
        icons: {
            headerIcon: '#b4b4b4',
            headerIconHover: '#696969',
        },
        buttons: {
            secondary: {
                bg: 'transparent',
                bgHover: '#242527',
                ripple: 'rgba(55, 56, 59, 0.98)',
                text: '#ffffff',
                border: '#888888'
            }
        },
        shadow: {
            boxShadow: '0 13px 35px #00000014'
        },
        border: {
            headerBorder: '1px solid #242527'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                '.text-secondary': {
                    color: theme.palette.text.secondary
                }
            })
        }
    }
})