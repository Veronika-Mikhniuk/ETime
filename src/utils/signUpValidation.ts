export const signUpValidationRules = {
    name: {
        required: 'Name is required'
    },
    username: {
        required: 'Username is required'
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
        }
    },
    password: {
        required: 'Enter password'
    },
    confirmPassword: {
        required: 'Enter password again',
        validate: (value: string, formValues: any) => {
            return value === formValues.password || 'Passwords don\'t match'
        }
    }
}