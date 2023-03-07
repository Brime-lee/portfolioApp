import React from 'react';
import projects from '../../data/projects';
import ProjectItem from './ProjectItem';
import Title from '../Title/Title';

function ProjectSection() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-10'>
      <div className='w-full '>
        <Title>Past Projects</Title>
        {projects.map(({ year, title, duration, details }) => (
          <ol
            key={title}
            className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'
          >
            <ProjectItem
              year={year}
              title={title}
              duration={duration}
              details={details}
            />
          </ol>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
