import { ButtonProps } from '@mui/material/Button'

export interface IButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: 'primary' | 'secondary'
}