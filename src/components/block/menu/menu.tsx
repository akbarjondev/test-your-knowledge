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
import { cn } from '@/lib/utils'

interface MenuProps {
  userSession: User | null | undefined
  className?: string
}

export const Menu = ({ userSession, className }: MenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn('h-auto self-center p-0', className)}
          variant='ghost'
        >
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
