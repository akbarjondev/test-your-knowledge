import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/shadcn/ui/dropdown-menu'
import { Button } from '@/components/shadcn/ui/button'
import { MenuSquareIcon } from 'lucide-react'
import { User } from 'next-auth'
import { Link } from '@/components/organism/link/link'

interface MenuProps {
  userSession: User | null | undefined
}

export const Menu = ({ userSession }: MenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='h-auto self-center p-0' variant='ghost'>
          <MenuSquareIcon size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Asosiy</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userSession ? (
          <>
            <DropdownMenuItem>
              <Link href={'/dashboard'}>Ish stoli</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/account'}>Profil</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem>
            <Link href={'/login'}>Kirish</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
