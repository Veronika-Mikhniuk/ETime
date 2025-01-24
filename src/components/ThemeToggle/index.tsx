import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from '@/context/ThemeContext'
import { StyledHeaderIcon } from '@/components/styled/icons'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export function ThemeToggle() {
    const theme = useTheme()
    const { toggleColorMode } = useContext(ColorModeContext)

    return (
        <button
            onClick={toggleColorMode}
            style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
            }}
        >
            {theme.palette.mode === 'dark'
                ? <DarkModeIcon component={StyledHeaderIcon} />
                : <LightModeIcon component={StyledHeaderIcon} />
            }
        </button>
    )
}