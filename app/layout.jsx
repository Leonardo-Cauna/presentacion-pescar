import './globals.css'
import { Inter } from 'next/font/google'
import HeaderMentoring from '../Components/Header.jsx'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        <HeaderMentoring />
        {children}
      </body>
    </html>
  )
}
