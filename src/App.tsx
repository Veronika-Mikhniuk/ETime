import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { router } from './router'
import './shared/styles/app.scss'

export default function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  )
}
