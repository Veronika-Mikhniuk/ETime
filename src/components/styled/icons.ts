import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'

export const StyledHeaderIcon = styled('svg')(({ theme }) => ({
    '& path': {
        color: theme.palette.icons.headerIcon,
        transition: 'color 0.3s ease',
        willChange: 'color',
    },
    '&:hover path': {
        color: theme.palette.icons.headerIconHover
    }
}))

export const StyledLogoLink = styled(NavLink)(({ theme }) => ({
    '& svg, & span': {
        color: theme.palette.icons.headerIcon,
        transition: 'color 0.3s ease',
    },
    '&:hover': {
        '& svg, & span': {
            color: theme.palette.icons.headerIconHover
        }
    }
}))