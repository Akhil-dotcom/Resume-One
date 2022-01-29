import React from 'react';
import Header from './Header';
import {  useRouter } from 'next/router'

interface LayoutProps{
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const router = useRouter()
  return <div className="bg-gray-900 min-h-screen flex flex-col">
      {router.pathname === "/editor" ? "" : <Header />}
      <div className="flex-grow h-full">{children}</div>
  </div>;
}

export default Layout;
