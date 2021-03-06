import React from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Template from '../components/Template';

function Projects() {
  return (
    <Template seoTitle="Projets">
      <h3><Texty type="right" mode="smooth" duration={100}>Mes projets</Texty></h3>
    </Template>
  )
}

export default Projects;