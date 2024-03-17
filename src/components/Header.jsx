import React from 'react';
import SiteTitle from './SiteTitle';
import TopMenu from './TopMenu';
import Section from './Section';

function Header() {
  return (
    <Section>
      <div className="flex flex-row content-end justify-between mx-auto pt-6 pb-4">
        <SiteTitle content="Barney's Travels" />
        <TopMenu />
      </div>
    </Section>
  );
}

export default Header;
