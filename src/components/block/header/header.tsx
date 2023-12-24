import { Link } from '@/components/organism/link/link'

export const Header = () => {
  return (
    <header className='bg-zinc-900 px-4 py-5 text-white'>
      <nav className='container flex items-center justify-between'>
        <Link href={'/'}>Bosh sahifa</Link>
        <div className='flex gap-4'>
          <Link href={'/dashboard'} prefetch>
            Ish stoli
          </Link>
          <Link href={'/login'} prefetch>
            Kirish
          </Link>
        </div>
      </nav>
    </header>
  )
}
