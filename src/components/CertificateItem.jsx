import React from 'react';

const CertificateItem = ({ name, link, details }) => {
  return (
    <li className='mb-10 ml-4'>
      <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
      <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
        <h3 className='text-2xl font-semibold text-stone-900 dark:text-white'>
          {name} -
        </h3>
        <a
          href={link}
          className='my-1 text-sm font-bold leading-none text-pink-400 hover:underline hover:text-pink-500'
        >
          Verify
        </a>
      </div>
      <p className='my-2 text-xl font-normal text-stone-500 dark:text-stone-400'>
        {details}
      </p>
    </li>
  );
};

export default CertificateItem;
