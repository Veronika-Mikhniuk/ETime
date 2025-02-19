import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { FormWrapper, CaptchaWrapper } from '@/components/styled/containers'
import { Button } from '@/components/shared/Button'
import { TextSecondary, TitleSecondary } from '@/components/styled/typography'
import { TextFieldStyled, DatePickerStyled, FormControlStyled, RadioStyled } from '@/components/styled/form-fields'
import { RadioGroup, FormControlLabel, FormLabel } from '@mui/material'
import { ISignUpFormData } from './ISignUpFormData'
import dayjs from 'dayjs'
import { signUpValidationRules } from '@/utils/signUpValidation'
import ReCAPTCHA from 'react-google-recaptcha'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './signUpForm.scss'

export function SignUpForm() {
    const theme = useTheme()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ISignUpFormData>()

    const handleRecaptchaChange = (token: string | null) => {
        setValue('recaptcha', token)
    }

    const onSubmit = (data: ISignUpFormData) => {
        const formattedData = {
            ...data,
            birthDate: dayjs(data.birthDate).toISOString() // Convert to ISO string
        }
        console.log(formattedData)
    }

    return (
        <FormWrapper className="signup-form" onSubmit={handleSubmit(onSubmit)}>

            <TitleSecondary className="signin-form__header">Sign Up</TitleSecondary>

            <div className="signup-form__fields">
                <div className="signup-form__row">
                    <TextFieldStyled
                        {...register('name', signUpValidationRules.name)}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        label="Name"
                        fullWidth
                    />
                    <TextFieldStyled
                        {...register('surname')}
                        label="Surname"
                        fullWidth
                    />
                </div>

                <TextFieldStyled
                    {...register('email', signUpValidationRules.email)}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    label="Email"
                    type="email"
                    fullWidth
                />

                <TextFieldStyled
                    {...register('username', signUpValidationRules.username)}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    label="Username"
                    fullWidth
                />

                <DatePickerStyled
                    onChange={value => setValue('birthDate', value)}
                    label={'Date of birth'}
                    views={['year', 'month', 'day']}
                    slotProps={{
                        textField: {
                            fullWidth: true
                        }
                    }}
                />

                <FormControlStyled>
                    <FormLabel>Select your role:</FormLabel>
                    <RadioGroup
                        {...register('role')}
                        className="signup-form__radio-group"
                    >
                        <FormControlLabel
                            value="student"
                            control={<RadioStyled />}
                            label="Student"
                            sx={{
                                color: theme.palette.text.secondary
                            }} />
                        <FormControlLabel
                            value="teacher"
                            control={<RadioStyled />}
                            label="Teacher"
                            sx={{
                                color: theme.palette.text.secondary
                            }} />
                    </RadioGroup>
                </FormControlStyled>

                <div className="signup-form__row">
                    <TextFieldStyled
                        {...register('password', signUpValidationRules.password)}
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
                        fullWidth
                    />
                    <TextFieldStyled
                        {...register('confirmPassword', signUpValidationRules.confirmPassword)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                        type={showConfirmPassword ? 'text' : 'password'}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} disableRipple sx={{
                                            padding: '5px',
                                            color: theme.palette.text.secondary
                                        }}>
                                            {showConfirmPassword ? <VisibilityOff sx={{ fontSize: '18px' }} /> : <Visibility sx={{ fontSize: '18px' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                        label="Confirm Password"
                        fullWidth
                    />
                </div>

                <CaptchaWrapper className="signup-form__captcha">
                    <div className="signup-form__captcha-container">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            key={theme.palette.mode}
                            sitekey="6LdK4iUqAAAAAF57jRjBvVhChMN_EfowjCjm_VmX"
                            onChange={handleRecaptchaChange}
                            theme={theme.palette.mode}
                            size="normal"
                            style={{
                                transform: 'scale(1)',
                                transformOrigin: 'center',
                                marginLeft: '-1px'
                            }}
                        />
                    </div>
                </CaptchaWrapper>
            </div>

            <div className="signup-form__actions">
                <Button
                    variant="primary"
                    type="submit"
                    className="signup-form__submit"
                >
                    Sign Up
                </Button>

                <div className="signup-form__signin">
                    <TextSecondary className="signin-form__signup-text">Already have an account?</TextSecondary>
                    <Button
                        variant="secondary"
                        className="signup-form__signin-btn"
                        onClick={() => { navigate('/sign-in') }}>
                        Sign In
                    </Button>
                </div>
            </div>
        </FormWrapper>
    )
}