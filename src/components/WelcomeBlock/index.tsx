import { features } from '@/components/WelcomeBlock/WelcomeSectionModel'
import { ContentWrapper } from '@/components/styled/containers'
import { WelcomeInfoWrapper } from '@/components/styled/containers'
import './welcomeBlock.scss'

export function WelcomeBlock() {

    return (
        <ContentWrapper className="welcome-section">
            <WelcomeInfoWrapper className="welcome-section__info">
                <h1>WELCOME TO</h1>
                <h2>ETime</h2>
                <p>Master English vocabulary with ease and efficiency. Our platform offers a comprehensive approach to learning new words through customized and standard word sets. Whether you're a beginner or looking to expand your advanced vocabulary, ETime has the tools you need.</p>
            </WelcomeInfoWrapper>
            <div className="welcome-section__features">
                {features.map((feature, index) => (
                    <div key={index} className="welcome-section__feature-card">
                        <img src={feature.img} alt="" />
                        <h3 className='text-secondary'>{feature.title}</h3>
                    </div>
                ))}
            </div>
        </ContentWrapper>
    )
}