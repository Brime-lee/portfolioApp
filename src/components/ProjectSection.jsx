import React from 'react';
import projects from '../data/projects';
import ProjectItem from './ProjectItem';
import Title from './Title';

function ProjectSection() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-10'>
      <div className='w-full md:w-7/12'>
        <Title>Past Projects</Title>
        {projects.map((project) => (
          <ProjectItem
            year={project.year}
            title={project.title}
            duration={project.duration}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
