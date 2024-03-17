import React from 'react';

function Section({ children }) {
  return (
    <div className="container px-6 mx-auto max-w-screen-xl">{children}</div>
  );
}

export default Section;
