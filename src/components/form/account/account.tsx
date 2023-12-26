'use client'

import { useState } from 'react'
import { Database } from '../../../types/supabase'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Input } from '@/components/shadcn/ui/input'
import { Button } from '@/components/shadcn/ui/button'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'next-auth'
import { toast } from 'react-hot-toast'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/ui/form'

const FormSchema = z.object({
  fullname: z.string().min(3, {
    message: "Ism kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  username: z.string().min(3, {
    message: "Username kamida 3 ta belgidan iborat bo'lishi kerak",
  }),
  email: z.string().email({
    message: "Pochta manzili noto'g'ri",
  }),
})

interface AccountFormProps {
  user: Pick<
    Database['public']['Tables']['profiles']['Row'],
    'id' | 'full_name' | 'username'
  > &
    Pick<User, 'email'>
}

export default function AccountForm({ user }: AccountFormProps) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: user.full_name || '',
      username: user.username || '',
      email: user.email || '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { fullname, username } = data
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user.id,
        full_name: fullname,
        username,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error

      toast.success('Profil muvaffaqiyatli yangilandi!')
    } catch (error) {
      toast.error('Xatolik yuz berdi!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col'>
      <Form {...form}>
        <form
          className='flex flex-col gap-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl className='max-w-sm'>
                  <Input {...field} disabled />
                </FormControl>
                <FormDescription>
                  Pochtangizni hozircha almashtira olmaysiz
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>To'liq ism</FormLabel>
                <FormControl className='max-w-sm'>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl className='max-w-sm'>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='button primary self-start'
            type='submit'
            disabled={loading}
          >
            Yangilash
          </Button>
        </form>
      </Form>

      <form
        className='mt-6 flex items-center gap-4'
        action='/auth/signout'
        method='post'
      >
        <Button variant={'destructive'} className='button block' type='submit'>
          Chiqish
        </Button>
      </form>
    </div>
  )
}
