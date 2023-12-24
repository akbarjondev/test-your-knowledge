import { Header } from '@/components/block/header/header'
import React, { ReactNode } from 'react'
import '@/styles/globals.scss'

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Bilimingizni sinab oling',
  description: 'Bilimingizni sinab oling',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <Header />
        <main className='container mx-auto'>{children}</main>
      </body>
    </html>
  )
}

export default Layout
