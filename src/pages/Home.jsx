import React from 'react';
import Header from './../components/Header';
import Intro from './../components/Intro';
import RepoSection from '../components/RepoSection';
import ProjectSection from '../components/ProjectSection';
import Footer from './../components/Footer';
import CertificationSection from '../components/CertificationSection';
import BG from '../../assets/bg.jpg';

const divStyle = {
  backgroundImage: `url(${BG})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Home = () => {
  return (
    <div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
      <div
        style={divStyle}
        className='flex h-screen  items-center justify-between flex-col text-center px-4 mb-20 '
      >
        <div className='w-full'>
          <Header />
        </div>
        <Intro />
      </div>
      <div className='max-w-7xl w-11/12 mx-auto'>
        <RepoSection />
        <ProjectSection />
        <CertificationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
