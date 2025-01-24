import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'


export function Layout() {
    return (
        <div
            className="layout"
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0 auto',
                height: '100vh',
            }}>

            <Header />
            <Main>
                <div className="container">
                    <Outlet />
                </div>
            </Main>
            <Footer />
        </div>
    )
}