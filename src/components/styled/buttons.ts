import { styled } from '@mui/material/styles'
import MUIButton from '@mui/material/Button'

export const BaseButton = styled(MUIButton)(() => ({
    textTransform: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: 'none',
    '&:hover': {
        boxShadow: 'none'
    }
}))

export const PrimaryButton = styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.palette.buttons.primary.bg,
    color: theme.palette.buttons.primary.text,
    border: `1px solid ${theme.palette.buttons.primary.border}`,
    '.MuiTouchRipple-child': {
        backgroundColor: `${theme.palette.buttons.primary.ripple} !important`
    },
    '&:hover': {
        backgroundColor: theme.palette.buttons.primary.bgHover,
        borderColor: theme.palette.buttons.primary.border
    },
    width: '100%'
}))

export const SecondaryButton = styled(BaseButton)(({ theme }) => ({
    backgroundColor: theme.palette.buttons.secondary.bg,
    color: theme.palette.buttons.secondary.text,
    border: `1px solid ${theme.palette.buttons.secondary.border}`,
    '.MuiTouchRipple-child': {
        backgroundColor: `${theme.palette.buttons.secondary.ripple} !important`
    },
    '&:hover': {
        backgroundColor: theme.palette.buttons.secondary.bgHover,
        borderColor: theme.palette.buttons.secondary.border
    }
}))