import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Radio, FormControl } from '@mui/material'

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
        color: '#d93025 !important',
        fontSize: '400',
        position: 'absolute',
        bottom: '-23px',
        marginLeft: '3px !important'
    }
}))

export const DatePickerStyled = styled(DatePicker)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& input': {
            color: theme.palette.text.primary
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
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
        '&.Mui-focused': {
            color: theme.palette.border.formBorder
        }
    },
    '& .MuiIconButton-root': {
        color: theme.palette.border.formBorder,
        padding: '5px',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        '& svg': {
            width: '20px',
            height: '20px',
            margin: '10px'
        }
    },
    '& .MuiIconButton-root .MuiTouchRipple-root': {
        display: 'none'
    }
}))

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
    '& .MuiFormLabel-root': {
        color: theme.palette.text.secondary,
        '&.Mui-focused': {
            color: theme.palette.text.secondary
        }
    }
}))

export const RadioStyled = styled(Radio)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '&.Mui-checked': {
        color: theme.palette.text.secondary
    }
}))