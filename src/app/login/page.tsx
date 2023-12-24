import { AuthForm } from '@/components/form/login/login'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h2 className='text-center'>Login</h2>
      <div className='mx-auto max-w-lg'>
        <AuthForm />
      </div>
    </div>
  )
}

export default Page
