'use client'

import { AppProgressBar as Progress } from 'next-nprogress-bar'
import { ReactNode } from 'react'

interface ProgressBarProps {
  children: ReactNode
}

const ProgressBar = ({ children }: ProgressBarProps) => {
  return (
    <>
      {children}
      <Progress
        height='2px'
        color='#ffffff'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressBar
