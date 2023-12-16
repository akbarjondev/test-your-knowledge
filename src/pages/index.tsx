import Link from 'next/link'

const Home = () => {
  return (
    <div className='container mx-auto bg-slate-400 px-4'>
      <p>Home!</p>
      <Link className='text-red-100' href='/dashboard'>
        Dashboard
      </Link>
    </div>
  )
}

export default Home
