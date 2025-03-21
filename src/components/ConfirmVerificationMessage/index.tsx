import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { AppDispatch } from '@/redux/store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { fetchVerify } from '@/redux/auth-slice'
import { ContentWrapper } from '@/components/styled/containers'
import { TitlePrimary, TextSecondary, SpanPrimary } from '@/components/styled/typography'
import { PrimaryButton } from '@/components/styled/buttons'
import successIcon from '@/assets/icons/success-icon.png'
import './confirmVerificationMessage.scss'

export function ConfirmVerificationMessage() {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const { loading, isEmailVerified, error } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        const token = searchParams.get('token')
        if (token) {
            dispatch(fetchVerify(token))
        }
    }, [dispatch, searchParams])

    if (loading) {
        return <div>Verifying your email...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (isEmailVerified) {
        return (
            <ContentWrapper className="email-verification">
                <TitlePrimary className="email-verification__title">
                    Email Verified!
                </TitlePrimary>
                <div className="email-verification__image">
                    <img
                        src={successIcon}
                        alt="Success"
                        className="email-verification__icon"
                    />
                </div>
                <div className="email-verification__message">
                    <TextSecondary>
                        Your email has been <SpanPrimary>successfully verified</SpanPrimary>.
                    </TextSecondary>
                    <TextSecondary>
                        You can now log in to your account.
                    </TextSecondary>
                </div>
                <PrimaryButton
                    className="email-verification__button"
                    onClick={() => navigate('/sign-in')}
                >
                    Go to Sign In
                </PrimaryButton>
            </ContentWrapper>
        )
    }

    return null
}