import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom';

export const TextSecondary = styled('p')(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: '400'
}))

export const TitlePrimary = styled('h1')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: '600'
}))

export const TitleSecondary = styled('h1')(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: '400'
}))

export const SpanPrimary = styled('span')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: '600'
}))

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
    color: theme.palette.links.form,
    fontWeight: '400'
}))