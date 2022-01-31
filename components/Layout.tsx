import React from 'react'
import Header from './Header'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const router = useRouter()
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      {router.pathname === '/editor' ? '' : <Header />}
      <div className="h-full flex-grow">{children}</div>
    </div>
  )
}

export default Layout
