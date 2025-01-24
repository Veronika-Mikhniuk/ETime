import { styled } from '@mui/material/styles'

export const ContentWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.shadow.boxShadow
}))

export const WelcomeInfoWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark'
        ? 'transparent'
        : '#00aefa'
}))

export const StyledHeader = styled('header')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: theme.palette.border.headerBorder
}))