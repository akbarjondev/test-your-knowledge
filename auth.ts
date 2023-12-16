import NextAuth from 'next-auth'
import github from 'next-auth/providers/github'
import google from 'next-auth/providers/google'
import type { NextAuthConfig } from 'next-auth'

export const config = {
  // theme: {
  //   logo: "/logo.svg",
  //   brandColor: "#000000",
  //   colorScheme: "auto",
  //   disableTelemetry: true,
  // }
  providers: [github, google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === '/dashboard') {
        return !!auth
      }

      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
