import { Navbar } from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// export function generateMetadata(pageTitle) {
//   return {
//     title: pageTitle,
//     description: 'Creado por Creative visual, juan samaritano',
//   };
// }

export const metadata =  {
  title:'a',
  description: 'Creado por Creative visual, juan samaritano',
}


export default function RsootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
