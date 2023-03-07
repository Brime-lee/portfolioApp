import React from 'react';
import Header from './../components/Header';
import Intro from './../components/Intro';
import Portfolio from './../components/Portfolio';
import ProjectSection from '../components/ProjectSection';
import Footer from './../components/Footer';
import BG from '../../assets/bg.jpg';
import CertificationSection from '../components/CertificationSection';

const Home = () => {
  return (
    <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
      <Header />
      <div className='max-w-5xl w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        <ProjectSection />
        <CertificationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
