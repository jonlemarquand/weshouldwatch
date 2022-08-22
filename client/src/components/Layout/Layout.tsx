import React from 'react';

import { Link } from 'react-router-dom';

import LogoIcon from '../Logo/LogoIcon';

import './Layout.scss';

interface LayoutProps {
  children: any;
  useLogo: boolean;
}

const Layout = ({ children, useLogo }: LayoutProps) => {
  return (
    <div className="container layout">
      {useLogo && (
        <Link to="/">
          <LogoIcon />
        </Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
