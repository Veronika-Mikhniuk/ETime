import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from '@mui/material/styles'
import { FormWrapper } from '@/components/styled/containers'
import { Button } from '@/components/shared/Button'
import { TextSecondary, HeaderSecondary, NavLinkStyled } from '@/components/styled/typography'
import { TextFieldStyled } from '@/components/styled/form-fields'
import { ISignInFormData } from './ISignInFromData'
import { signInValidationRules } from '@/utils/signInValidation'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './signInForm.scss'

export const SignInForm = () => {
    const theme = useTheme()
    const { register, handleSubmit, formState: { errors } } = useForm<ISignInFormData>()
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (data: ISignInFormData) => {
        console.log(data)
    }

    return (
        <FormWrapper className="signin-form" onSubmit={handleSubmit(onSubmit)}>

            <HeaderSecondary className="signin-form__header">Sign In</HeaderSecondary>

            <div className="signin-form__fields">
                <TextFieldStyled
                    {...register('email', signInValidationRules.email)}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="signin-form__input"
                />

                <TextFieldStyled
                    {...register('password', signInValidationRules.password)}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    type={showPassword ? 'text' : 'password'}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} disableRipple sx={{
                                        padding: '5px',
                                        color: theme.palette.text.secondary
                                    }}>
                                        {showPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    className="signin-form__input"
                />
            </div>

            <div className="signin-form__actions">
                <NavLinkStyled to="/forgot-password" className="signin-form__forgot">
                    Forgot password?
                </NavLinkStyled>

                <Button variant="primary" type='submit' className="signin-form__submit">
                    Sign In
                </Button>

                <div className="signin-form__signup">
                    <TextSecondary className="signin-form__signup-text">Don't have an account?</TextSecondary>
                    <Button variant="secondary" className="signin-form__signup-btn">
                        Sign Up
                    </Button>
                </div>
            </div>
        </FormWrapper>
    )
}