'use client'

import { User } from '@supabase/auth-helpers-nextjs'
import { Link } from '@/components/organism/link/link'

interface HeaderProps {
  userSession: User | null | undefined
}

export const Header = ({ userSession }: HeaderProps) => {
  return (
    <header className='bg-zinc-900 px-4 py-5 text-white'>
      <nav className='container flex items-center justify-between'>
        <Link href={'/'}>Bosh sahifa</Link>
        <div className='flex gap-4'>
          <Link href={'/dashboard'}>Ish stoli</Link>
          {userSession ? (
            <Link href={'/account'}>Profil</Link>
          ) : (
            <Link href={'/login'}>Kirish</Link>
          )}
        </div>
      </nav>
    </header>
  )
}
