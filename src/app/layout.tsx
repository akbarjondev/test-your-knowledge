import { Header } from '@/components/block/header/header'
import React, { ReactNode } from 'react'
import '@/styles/globals.scss'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Metadata } from 'next'

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Bilimingizni sinab oling',
  description: 'Bilimingizni sinab oling',
}

const Layout = async ({ children }: LayoutProps) => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html>
      <body>
        <Header userSession={session?.user} />
        <main className='container mx-auto'>{children}</main>
      </body>
    </html>
  )
}

export default Layout
