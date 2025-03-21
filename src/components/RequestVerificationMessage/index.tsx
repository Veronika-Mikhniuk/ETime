import { ContentWrapper } from '@/components/styled/containers'
import { SpanPrimary, TextSecondary, TitlePrimary } from '@/components/styled/typography'
import emailIcon from '@/assets/icons/email-icon.png'
import './requestVerificationMessage.scss'

export function RequestVerificationMessage({ email }: { email: string }) {

    return (
        <ContentWrapper className="email-confirmation">
            <TitlePrimary className="email-confirmation__title">
                Confirm your e-mail
            </TitlePrimary>

            <div className="email-confirmation__image">
                <img
                    src={emailIcon}
                    alt="Email confirmation"
                    className="email-confirmation__icon"
                />
            </div>

            <div className="email-confirmation__message">
                <TextSecondary>
                    We've sent an email to <SpanPrimary>{email}</SpanPrimary>.
                </TextSecondary>
                <TextSecondary>
                    To complete your registration, please follow the link in the email.
                </TextSecondary>
                <TextSecondary className="email-confirmation__spam-note">
                    If you can't find the email, please check your <span>spam</span> folder.
                </TextSecondary>
            </div>
        </ContentWrapper>
    )
}