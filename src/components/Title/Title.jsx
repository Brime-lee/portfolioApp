import React from 'react';

function Title({ children }) {
  return (
    <h1 className='text-xl md:text-4xl text-center dark:text-white mb-1 md:mb-8 font-bold'>
      {children}
    </h1>
  );
}

export default Title;
