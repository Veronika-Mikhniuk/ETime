import { Dayjs } from 'dayjs'

export interface ISignUpFormData {
    name: string
    surname: string
    email: string
    username: string
    birthDate: Dayjs | null
    roleName: string
    password: string
    confirmPassword: string
    recaptcha: string | null
}