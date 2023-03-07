import React from 'react';
import certificates from '../data/certificates';

function CertificationSection() {
  return (
    <>
      <div className='flex items-center justify-center flex-col text-center pb-6'>
        <h1 className='text-xl md:text-xl dark:text-white mb-1 md:mb-3 font-bold'>
          Certificates and Soft Skils
        </h1>
        <p className='text-base text-stone-400 dark:text-stone-500 max-w-xl mb-6 '>
          Listed below are some relevent certificates I possess accross
          Universities worldwide.
          <br />
          In addition to my technical expertise, I also possess soft skills.
          Among others, I believe that effective communication, collaboration,
          and problem-solving are critical to success in any project or
          organization. I strive to cultivate positive working relationships
          with colleagues and clients alike, and I am always eager to learn from
          others and share my own knowledge and experience.
        </p>
      </div>
      {certificates.map(({ name, link, details }) => (
        <ol
          key={link}
          className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'
        >
          <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
            <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
              <h3 className='text-xl font-semibold text-stone-900 dark:text-white'>
                {name} -
              </h3>
              <a
                href={link}
                className='my-1 text-sm font-bold leading-none text-pink-400 hover:underline hover:text-pink-500'
              >
                Verify
              </a>
            </div>
            <p className='my-2 text-sm font-normal text-stone-500 dark:text-stone-400'>
              {details}
            </p>
          </li>
        </ol>
      ))}
    </>
  );
}

export default CertificationSection;
