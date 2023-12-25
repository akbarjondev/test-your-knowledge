import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Database } from '@/types/supabase'
import { PagesLayout } from '@/components/block/pages-layout/pages-layout'
import Head from 'next/head'

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createPagesBrowserClient<Database>())

  return (
    <>
      <Head>
        <title>Ish stoli</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <PagesLayout>
          <Component {...pageProps} />
        </PagesLayout>
      </SessionContextProvider>
    </>
  )
}
