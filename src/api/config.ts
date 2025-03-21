import { IApiConfig, IApiEndpoints } from "@/api/types/ApiConfigTypes"

export const apiConfig: IApiConfig = {
    baseUrl: 'https://localhost:44392/api'
}

export const apiEndpoints: IApiEndpoints = {
    auth: {
        register: '/auth/register',
        verifyEmail: '/auth/email/verify',
        login: '/auth/login',
        refreshToken: '/auth/refresh-token',
        logout: '/auth/logout'
    }
}