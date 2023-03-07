import React from 'react';

function RepoCard({ name, description, url, visibility }) {
  const MAX_LENGTH = 75;
  const ellipsis = '...';

  return (
    <div className='p-4 w-90 h-40 flex flex-col bg-pink-100 justify-between border-2 border-pink-300 dark:border-white rounded-md overflow-hidden'>
      <div className='flex items-center justify-between '>
        <h1 className='text-lg font-semibold text-stone-900 '>{name}</h1>
        <div className='p-2 border border-pink-500 bg-pink-400 rounded-3xl text-base font-bold text-stone-700'>
          {visibility}
        </div>
      </div>
      <p className='my-2 text-base font-normal text-stone-600 '>
        {description?.length > MAX_LENGTH
          ? description?.slice(0, MAX_LENGTH - ellipsis.length) + ellipsis
          : description}
      </p>
      <a className='hover:underline font-bold text-stone-900' href={url}>
        repo link
      </a>
    </div>
  );
}

export default RepoCard;
