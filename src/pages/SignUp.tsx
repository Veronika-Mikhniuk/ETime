import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { SignUpForm } from '@/components/SignUpForm'
import { RequestVerificationMessage } from '@/components/RequestVerificationMessage'

export function SignUp() {
    const { isRegistered, isEmailSent } = useSelector((state: RootState) => state.auth)
    const email = 'veronika.mikhniuk@gmail.com'

    if (isRegistered && isEmailSent) {
        return (
            <RequestVerificationMessage email={email} />
        )
    }
    return (
        <SignUpForm />
    )
}