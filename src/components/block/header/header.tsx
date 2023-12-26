'use client'

import { User } from '@supabase/auth-helpers-nextjs'
import { Link } from '@/components/organism/link/link'
import { Menu } from '../menu/menu'

interface HeaderProps {
  userSession: User | null | undefined
}

export const Header = ({ userSession }: HeaderProps) => {
  return (
    <header className='bg-zinc-900 py-5 text-white'>
      <nav className='container flex items-center justify-between'>
        <Link href={'/'}>Bosh sahifa</Link>
        <div className='hidden gap-4 md:flex'>
          {userSession ? (
            <>
              <Link href={'/dashboard'}>Ish stoli</Link>
              <Link href={'/account'}>Profil</Link>
            </>
          ) : (
            <Link href={'/login'}>Kirish</Link>
          )}
        </div>
        <Menu className='md:hidden' userSession={userSession} />
      </nav>
    </header>
  )
}
