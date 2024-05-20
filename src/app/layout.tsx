import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import ReactQueryWrapper from '@/libs/react-query'
import '@/styles/global.css'
import { Jersey_15 } from 'next/font/google'

const jersey_15 = Jersey_15({ subsets: ['latin'], weight: ['400'], style: 'normal', display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jersey_15.className + ' text-xl'}>
      <body >
        <ReactQueryWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
