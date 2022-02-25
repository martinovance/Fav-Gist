import React from 'react';
import { Header } from './';

const Layout = () => {
  return (
    <div>
        <>
        <Header />
        {children}
        </>
    </div>
  )
};

export default Layout;
