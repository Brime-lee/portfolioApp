import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectSection from '../ProjectSection';
import projects from '../../../data/projects';

describe('ProjectSection', () => {
  it('should render a list of project items with correct data', () => {
    render(<ProjectSection />);

    // Check that the section heading is rendered
    expect(screen.getByText('Past Projects')).toBeInTheDocument();

    // Check that a project item is rendered for each project in the data array
    projects.forEach((project) => {
      expect(screen.getByText(project.year)).toBeInTheDocument();
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.duration)).toBeInTheDocument();
      expect(screen.getByText(project.details)).toBeInTheDocument();
    });
  });
});
