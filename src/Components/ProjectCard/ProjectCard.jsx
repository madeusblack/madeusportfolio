/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
  const { projectName, projectLink, projectImg, projectTechs } = props;
  const Image = require(`../../Assets/${projectImg}.jpg`);
  const ImageWebp = require(`../../Assets/${projectImg}.webp`);

  return (
    <div className={classes.ProjectCard}>
      <h2 className={classes.title}>{projectName}</h2>
      <img className={classes.projectImg} alt={projectName} />
      {
        projectTechs.map((tech) => (
          <div className={techContainer}>
            <h5>{tech}</h5>
          </div>
        ))
      }
      <a href={projectLink}>Github</a>
    </div>
  );
};
export default ProjectCard;
