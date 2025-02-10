import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LangToggle } from '@/components/LangToggle'
import { StyledLogoLink } from '@/components/styled/icons'
import { StyledHeader } from '@/components/styled/containers'
import { Button } from '@/components/shared/Button'

import SchoolIcon from '@mui/icons-material/School'
import './header.scss'

export function Header() {
    const navigate = useNavigate()
    return (
        <StyledHeader className="header">
            <StyledLogoLink to="/home" className="header__logo">
                <SchoolIcon />
                <span className="header__logo__text">ETime</span>
            </StyledLogoLink>

            <div className="header__actions">
                <LangToggle />
                <ThemeToggle />

                <div className="header__auth"> {/* //TODO: сделать в отдельный компонент */}
                    <Button
                        variant="secondary"
                        className="auth-button"
                        onClick={() => navigate('/sign-in')}>
                        Sign In
                    </Button>
                    <Button
                        variant="secondary"
                        className="auth-button">
                        Sign Up
                    </Button>
                </div>
            </div>
        </StyledHeader>
    )
}