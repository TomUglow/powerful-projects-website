import React from 'react';

const Project = ({ images, projectName, description, location }) => {
  return (
    <div className="project">
      <div className="project-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Project ${index + 1}`} />
        ))}
      </div>
      <div className="project-description">
        <h2>{projectName}</h2>
        <h4>{description}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Project;
