import { Link } from 'gatsby';
import React from 'react';

function TopMenuLink({ to, linkText }) {
  return <Link to={to}>{linkText}</Link>;
}

export default TopMenuLink;
