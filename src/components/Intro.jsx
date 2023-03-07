import React from 'react';

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
        Ibrahim
      </h1>
      <p className='text-base md:text-xl mb-3 font-medium'>
        Frontend Developer
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        Hi there! 👋 I'm a frontend developer with a passion for creating
        beautiful, intuitive, and user-friendly interfaces. 🎨🌟 With
        significant years of experience in React.js, Next.js among others. I
        specialize in crafting responsive web designs that adapt to any screen
        size or device. 📱💻
        <br /> I'm constantly striving to stay on top of the latest trends and
        technologies, and I love experimenting with new frameworks and libraries
        to find the best solutions for any project. 💡 Whether it's a simple
        landing page or a complex web application, I'm always eager to take on
        new challenges and push the boundaries of what's possible. 🚀💪
      </p>
    </div>
  );
}

export default Intro;
