import React from 'react';
import TopMenuLink from './TopMenuLink';

function TopMenu() {
  return (
    <div className="flex flex-row content-end">
      <TopMenuLink linkText="Home" to="/" />
      <TopMenuLink linkText="Gallery" to="/gallery" />
      <TopMenuLink linkText="Blog" to="/blog" />
    </div>
  );
}

export default TopMenu;
