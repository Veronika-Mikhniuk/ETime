import { post } from '@/api/axios'
import { apiEndpoints } from '@/api/config'
import { ISignUpParams, ISignUpResponse, IVerifyResponse } from '@/services/auth/types/RegistrationServiceTypes'

export const requestSignUp = async (body: ISignUpParams): Promise<ISignUpResponse> => {
    const signUpEndpoint = apiEndpoints.auth.register
    try {
        const response = await post(signUpEndpoint, body)

        return response.data
    }
    catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return {
                hasError: true,
                message: error.message
            }
        }
        return {
            hasError: true,
            message: 'An unknown error occurred'
        }
    }
}

export const requestVerify = async (token: string): Promise<IVerifyResponse> => {
    const verifyEndpoint = `${apiEndpoints.auth.verifyEmail}?token=${token}`
    try {
        const response = await post(verifyEndpoint)

        return response.data
    }
    catch (error) {
        console.log(error)
        if (error instanceof Error) {
            return {
                hasError: true,
                message: error.message
            }
        }
        return {
            hasError: true,
            message: 'An unknown error occurred'
        }
    }
}