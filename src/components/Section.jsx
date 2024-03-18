import React from 'react';
import classNames from 'classnames';

function Section({ children, className }) {
  return (
    <div
      className={classNames(
        'container px-6 mx-auto max-w-screen-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Section;
