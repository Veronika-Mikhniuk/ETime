import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ISignUpParams } from '@/services/auth/types/RegistrationServiceTypes'
import { requestSignUp, requestVerify } from '@/services/auth/registration'

interface IAuthState {
    loading: boolean
    error: string | null
    isRegistered: boolean
    isEmailVerified: boolean
    isEmailSent: boolean
}

const initialState: IAuthState = {
    loading: false,
    error: null,
    isRegistered: false,
    isEmailVerified: false,
    isEmailSent: false
}

export const fetchSignUpAndVerify = createAsyncThunk<
    void, // type of returned data
    ISignUpParams,  // type of input parameters
    { rejectValue: { message: string } }  // type of rejection error
>(
    'auth/fetchSignUpAndVerify',
    async (userData, { rejectWithValue }) => {
        const signUpResponse = await requestSignUp(userData)

        if (signUpResponse.hasError) {
            return rejectWithValue({
                message: signUpResponse.message || 'Registration failed'
            })
        }
    }
)

export const fetchVerify = createAsyncThunk<
    void, // type of returned data
    string,  // type of input parameters
    { rejectValue: { message: string } }  // type of rejection error
>(
    'auth/fetchVerify',
    async (token, { rejectWithValue }) => {
        const response = await requestVerify(token)

        if (response.hasError) {
            return rejectWithValue({
                message: response.message || 'Registration failed'
            })
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // sign up and verify
            .addCase(fetchSignUpAndVerify.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchSignUpAndVerify.fulfilled, (state) => {
                state.loading = false
                state.isRegistered = true
                state.isEmailSent = true
            })
            .addCase(fetchSignUpAndVerify.rejected, (state, action: ReturnType<typeof fetchSignUpAndVerify.rejected>) => {
                state.loading = false
                state.error = action.payload?.message || 'Registration failed'
            })

            // verify confirm
            .addCase(fetchVerify.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchVerify.fulfilled, (state) => {
                state.loading = false
                state.isEmailVerified = true
            })
            .addCase(fetchVerify.rejected, (state, action: ReturnType<typeof fetchVerify.rejected>) => {
                state.loading = false
                state.error = action.payload?.message || 'Verification failed'
            })
    }
})

export const authReducer = authSlice.reducer