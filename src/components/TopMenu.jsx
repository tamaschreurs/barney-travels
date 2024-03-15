import React from 'react';
import TopMenuLink from './TopMenuLink';

function TopMenu() {
  return (
    <div className="flex flex-row content-end">
      <TopMenuLink linkText="Gallery" />
      <TopMenuLink linkText="Blog" />
    </div>
  );
}

export default TopMenu;
