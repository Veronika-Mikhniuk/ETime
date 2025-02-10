import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Palette {
        icons: {
            headerIcon: string
            headerIconHover: string
        }
        buttons: {
            primary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
            secondary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
        }
        links: {
            form: string
        }
        shadow: {
            boxShadow: string
        }
        border: {
            headerBorder: string
            formBorder: string
        }
    }
    interface PaletteOptions {
        icons?: {
            headerIcon: string
            headerIconHover: string
        }
        buttons?: {
            primary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
            secondary: {
                bg: string
                bgHover: string
                ripple: string
                text: string
                border: string
            }
        }
        links: {
            form: string
        }
        shadow: {
            boxShadow: string
        }
        border: {
            headerBorder: string
            formBorder: string
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
            primary: {
                bg: '#00aefa',
                bgHover: '#14b4fa',
                ripple: 'rgba(191, 219, 243, 0.92)',
                text: '#ffffff',
                border: '#e3f2fd'
            },
            secondary: {
                bg: '#e3f2fd',
                bgHover: '#cde3f5ee',
                ripple: 'rgba(161, 203, 237, 0.92)',
                text: '#1976d2',
                border: '#e3f2fd'
            }
        },
        links: {
            form: '#00aefa'
        },
        shadow: {
            boxShadow: '0 13px 35px #00000014'
        },
        border: {
            headerBorder: '1px solid #ebeced',
            formBorder: '#666666'
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
            primary: {
                bg: '#bb432c',
                bgHover: '#ac422d',
                ripple: 'rgba(224, 148, 133, 0.72)',
                text: '#ffffff',
                border: '#bb432c'
            },
            secondary: {
                bg: 'transparent',
                bgHover: '#242527',
                ripple: 'rgba(55, 56, 59, 0.98)',
                text: '#ffffff',
                border: '#888888'
            }
        },
        links: {
            form: '#ff4d4d'
        },
        shadow: {
            boxShadow: '0 13px 35px #00000014'
        },
        border: {
            headerBorder: '1px solid #242527',
            formBorder: '#c0c0c0'
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