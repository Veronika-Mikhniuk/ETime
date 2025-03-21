export interface IApiConfig {
    baseUrl: string
}

export interface IApiEndpoints {
    auth: {
        register: string
        verifyEmail: string
        login: string
        refreshToken: string
        logout: string
    }
}