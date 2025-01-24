import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            }
        ]
    }
]

export const router = createBrowserRouter(routes)