import React from 'react';
import Header from './Header';

interface LayoutProps{
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return <div className="bg-gray-900">
      <Header />
      <div>{children}</div>
  </div>;
}

export default Layout;
