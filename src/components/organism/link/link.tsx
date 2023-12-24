import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export const Link = ({
  children,
  ...props
}: LinkProps & { children: ReactNode }) => {
  return (
    <NextLink className='transition-all hover:text-blue-500' {...props}>
      {children}
    </NextLink>
  )
}
