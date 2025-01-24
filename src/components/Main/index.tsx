import { ReactNode } from 'react'

export function Main({ children }: { children: ReactNode }) {
    return (
        <main className="main"
            style={{ display: 'flex', flex: '1', padding: '0 10px' }}>{children}</main>
    )
}