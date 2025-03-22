import React from 'react';
import { Helmet } from 'react-helmet';
import './Projects.css';
import ProjectsHead from './components/ProjectsHead';
import Project from './components/ProjectsContent';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import logo from '../../assets/logos/final logo_black_no background.jpg';

import Project1_1 from '../../assets/images/RS101185_websize.jpg';
import Project1_2 from '../../assets/images/RS101178_websize.jpg';
import Project1_3 from '../../assets/images/RS101156_websize.jpg';

import Project2_1 from '../../assets/images/BarwonEdge_15.png';
import Project2_2 from '../../assets/images/BarwonEdge_14_websize.jpg';
import Project2_3 from '../../assets/images/BarwonEdge_19_websize.jpg';

import Project3_1 from '../../assets/images/Pitch_Tucker House_TV Room_2_2022.jpg';
import Project3_2 from '../../assets/images/Pitch_Tucker House_TV Room_1.jpg';
import Project3_3 from '../../assets/images/Pitch_Tucker House_ Ensuite_July 2022.jpg';

const projects = [
  {
    id: 1,
    images: [Project1_1, Project1_2, Project1_3],
    projectName: 'Barwon Cafe',
    description: 'Builder - Coastal Grain',
    location: 'Geelong 2023'
  },
  {
    id: 2,
    images: [Project2_1, Project2_2, Project2_3],
    projectName: 'Barwon Restaurant',
    description: 'Builder - Coastal Grain',
    location: 'Geelong 2023'
  },
  {
    id: 3,
    images: [Project3_1, Project3_2, Project3_3],
    projectName: 'Grange Road',
    description: 'Builder - Pitch Building Group',
    location: 'Toorak 2022'
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <Helmet> {/* Add Helmet here */}
        <title>Our Electrical Projects in Melbourne | Powerful Projects</title>
        <meta name="description" content="Showcase of our recent electrical projects in Melbourne, including cafe installations, restaurant setups, and residential installations. See our work and get a free quote." />
        <meta property="og:title" content="Our Electrical Projects in Melbourne | Powerful Projects" />
        <meta property="og:description" content="Showcase of our recent electrical projects in Melbourne, including cafe installations, restaurant setups, and residential installations. See our work and get a free quote." />
        <meta property="og:image" content={"https://www.powerfulprojects.com.au" + logo.src} />
        <meta property="og:url" content="https://www.powerfulprojects.com.au/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Our Electrical Projects in Melbourne | Powerful Projects" />
        <meta name="twitter:description" content="Showcase of our recent electrical projects in Melbourne, including cafe installations, restaurant setups, and residential installations. See our work and get a free quote." />
        <meta property="twitter:image" content={"https://www.powerfulprojects.com.au" + logo.src} />
        <link rel="canonical" href="https://www.powerfulprojects.com.au/projects" />
      </Helmet>
      <ProjectsHead />
      <div className="projects-content">
        <div className='projects-logo'>
        <img src={logo} alt='Powerful Projects logo'/>
        </div>
        {projects.map((project) => (
          <Project key={project.id} images={project.images} projectName={project.projectName} description={project.description} location={project.location} />
      ))}
      </div>
      <QuoteSection />
    </div>
  );
};

export default Projects;