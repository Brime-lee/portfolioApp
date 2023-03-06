import React from 'react';
import Header from './../components/Header';
import Intro from './../components/Intro';
import Portfolio from './../components/Portfolio';
import Timeline from './../components/Timeline';
import Contact from './../components/Contact';
import Footer from './../components/Footer';

const Home = () => {
  return (
    <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
      <Header />
      <div className='max-w-5xl w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
