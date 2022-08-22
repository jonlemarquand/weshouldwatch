import React from 'react';
import LogoIcon from '../Logo/LogoIcon';

import './Layout.scss';

interface LayoutProps {
  children: any;
  useLogo: boolean;
}

const Layout = ({ children, useLogo }: LayoutProps) => {
  return (
    <div className="container layout">
      {useLogo && <LogoIcon />}
      {children}
    </div>
  );
};

export default Layout;
