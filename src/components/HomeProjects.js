import React from "react";
import styled from "styled-components";
import { projects } from "../utils/data";
import ProjectCard from "../components/ProjectCard";
import { device } from "../utils/device";

const StyledContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
    font-family: "codePro", 'Courier New', Courier, monospace;
  }
  .home-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    @media ${device.laptop} {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;

export default function HomeProjects() {
  return (
    <StyledContainer>
      <h1>{`{ Projects }`}</h1>
      <div className='home-projects'>
        <ProjectCard project={projects.amCommBank} />
        <ProjectCard project={projects.royer} />
        <ProjectCard project={projects.matsonBros} />
      </div>
    </StyledContainer>
  );
}
