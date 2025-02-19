import { Dayjs } from 'dayjs'

export interface ISignUpFormData {
    name: string
    surname: string
    email: string
    username: string
    birthDate: Dayjs | null
    role: 'student' | 'teacher'
    password: string
    confirmPassword: string
    recaptcha: string | null
}