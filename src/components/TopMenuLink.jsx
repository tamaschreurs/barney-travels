import { Link } from 'gatsby';
import React from 'react';

function TopMenuLink({ to, linkText }) {
  return (
    <div className="border-solid border-b-2 px-4 mx-2 pb-1 self-end">
      <Link to={to} className="text-lg">
        {linkText}
      </Link>
    </div>
  );
}

export default TopMenuLink;
