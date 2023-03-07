import React from 'react';
import certificates from '../data/certificates';
import CertificateItem from './CertificateItem';
import Title from './Title';

function CertificationSection() {
  return (
    <>
      <div className='flex items-center justify-center flex-col text-center pb-6'>
        <Title>Certificates and Soft Skils</Title>

        <p className='text-xl text-stone-400 dark:text-stone-500 max-w-7xl mb-6 '>
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
          <CertificateItem name={name} link={link} details={details} />
        </ol>
      ))}
    </>
  );
}

export default CertificationSection;
