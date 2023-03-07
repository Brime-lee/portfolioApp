import React from 'react';

function Intro() {
  return (
    <>
      <div className='flex h-screen items-center justify-center flex-col text-center px-4'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <h1 className='text-4xl md:text-7xl text-stone-900 mb-1 md:mb-8 font-bold'>
          Ibrahim Ismail
        </h1>
        <p className='text-xl md:text-4xl text-stone-700 mb-6 font-medium'>
          Frontend Developer
        </p>
        <p className='text-sm md:text-xl max-w-7xl mb-6 text-stone-700 font-bold'>
          Hi there! 👋 I am a frontend developer with a passion for creating
          beautiful, intuitive, and user-friendly interfaces. 🎨🌟 With
          significant years of experience in React.js, Next.js among others. I
          specialize in crafting responsive web designs that adapt to any screen
          size or device. 📱💻
          <br /> I'm constantly striving to stay on top of the latest trends and
          technologies, and I love experimenting with new frameworks and
          libraries to find the best solutions for any project. 💡 Whether it's
          a simple landing page or a complex web application, I'm always eager
          to take on new challenges and push the boundaries of what's possible.
          🚀💪
        </p>
      </div>
    </>
  );
}

export default Intro;
