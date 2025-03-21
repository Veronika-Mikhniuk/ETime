export interface ISignUpParams {
    username: string
    name: string
    surname: string
    email: string
    password: string
    roleName: string
    language: string
    theme: string
    recaptcha: string | null
    birthDate: string | null
}

export interface ISignUpResponse {
    hasError?: boolean
    message?: string
}

export interface IVerifyResponse {
    hasError?: boolean
    message?: string
}