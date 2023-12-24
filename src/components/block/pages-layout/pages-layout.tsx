import { ReactNode } from 'react'
import { Header } from '@/components/block/header/header'
import { useUser } from '@supabase/auth-helpers-react'

interface PagesLayoutProps {
  children: ReactNode
}

export const PagesLayout = ({ children }: PagesLayoutProps) => {
  const userSession = useUser()

  return (
    <>
      <Header userSession={userSession} />
      <main>{children}</main>
    </>
  )
}
