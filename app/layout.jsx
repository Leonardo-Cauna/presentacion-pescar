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
        <script src="https://kit.fontawesome.com/6337bd4f6e.js" crossorigin="anonymous"></script>
      </body>

    </html>
  )
}
