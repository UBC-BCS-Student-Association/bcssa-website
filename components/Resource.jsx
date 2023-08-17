import React from 'react';
import ProjectCard from './ProjectCard'; 

export default function Resource () {
    return (
        <div>
          <p class="text-2xl text-center ...">Resource</p>
          <div className="flex flex-wrap">         
            <ProjectCard 
                name="Test" 
                image="/bcsteam.JPG" 
                blurb="this is a test blurb, this section should contain a short description of the student's project. It should contain the studnets' names and what the project does." 
                videoLink="https://www.facebook.com/groups/ubcbcsclub/"
                projectLink="https://www.linkedin.com/groups/14108803/" 
            /> 
            <ProjectCard 
                name="Test2" 
                image="/bcsgathering.jpeg" 
                blurb="this is a test blurb, this section should contain a short description of the student's project. It should contain the studnets' names and what the project does." 
                videoLink="https://www.facebook.com/groups/ubcbcsclub/"
                projectLink="https://www.linkedin.com/groups/14108803/" 
            /> 
          </div>
        </div>
      )
}