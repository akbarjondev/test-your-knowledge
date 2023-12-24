import { Header } from '@/components/block/header/header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className='container mx-auto'>
        <Component {...pageProps} />
      </main>
    </div>
  )
}
