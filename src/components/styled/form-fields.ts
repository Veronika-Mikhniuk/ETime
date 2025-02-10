import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& input:-webkit-autofill': {
            'WebkitBoxShadow': `0 0 0 100px ${theme.palette.background.paper} inset!important`,
        },
        '& input': {
            color: theme.palette.text.primary
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.formBorder,
        },
        '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.formBorder,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.formBorder,
            borderWidth: '1px !important'
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.border.formBorder
        }
    },
    '& .MuiFormLabel-root': {
        '&.Mui-error': {
            color: theme.palette.border.formBorder
        },
        '&.Mui-focused': {
            color: theme.palette.border.formBorder
        }
    },
    '&:hover': {
        '& .MuiFormLabel-root.Mui-error': {
            color: theme.palette.border.formBorder,
            borderColor: theme.palette.border.formBorder
        }
    },
    '& .MuiFormHelperText-root': {
        color: '#ff0000 !important',
        fontSize: '400',
        position: 'absolute',
        bottom: '-23px',
        marginLeft: '3px !important'
    }
}))