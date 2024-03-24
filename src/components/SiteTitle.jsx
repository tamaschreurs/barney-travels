import React from 'react';
import icon from '../images/icon.svg';

function SiteTitle({ content }) {
  return (
    <span className="text-4xl font-light flex flex-row">
      <img src={icon} className="w-12 h-12 mr-4" alt="" />
      {content}
    </span>
  );
}

export default SiteTitle;
