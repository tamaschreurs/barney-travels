import React from 'react';
import HeadingOne from './HeadingOne';
import TopMenu from './TopMenu';

function Header() {
  return (
    <div className="flex flex-row content-end justify-between max-w-screen-lg mx-auto">
      <HeadingOne content="Barney's Travels" />
      <TopMenu />
    </div>
  );
}

export default Header;
