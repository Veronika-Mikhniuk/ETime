import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { EmailVerification } from './pages/EmailVerification'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'verify-email',
                element: <EmailVerification />
            }
        ]
    }
]

export const router = createBrowserRouter(routes)