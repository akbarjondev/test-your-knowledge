import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../types/supabase'
import AccountForm from '../../components/form/account/account'

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const user = session?.user

  if (!user) return null

  const { data } = await supabase
    .from('profiles')
    .select('id, full_name, username')
    .eq('id', user.id)

  const userData = data?.[0]

  if (!userData) return null

  return (
    <section className='mt-10'>
      <AccountForm
        user={{
          email: user.email,
          ...userData,
        }}
      />
    </section>
  )
}
