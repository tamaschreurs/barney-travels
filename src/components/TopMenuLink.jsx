import { Link } from 'gatsby';
import React from 'react';

function TopMenuLink({ to, linkText }) {
  return (
    <Link
      to={to}
      className="text-lg border-solid border-b-2 mx-2 self-end pb-1"
      activeClassName="font-bold border-black"
    >
      <div className="px-4 self-end">{linkText}</div>
    </Link>
  );
}

export default TopMenuLink;
