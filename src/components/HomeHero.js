import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";


const StyledContainer = styled.section`
  background: black;
  margin: 3rem 0 0 0;
  padding: 0 0 1rem 0;
  width: 100vw;
  div {
    width: 90%;
    margin: 0 auto;
  }
  img {
    height: 300px;
    width: auto;
    transform: translateY(-2rem);
  }
  h3 {
    color:white;
    font-family: "codePro";
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  p {
    color: white;
    font-family: "Operator mono";
    font-style: italic;
    font-size: 1.2rem;
    text-align: center;
    line-height: 150%;
    span {
      text-transform: capitalize;
    }
    #react {
      color: #e4e218;
    }
    #node {
      color: #4fcd54;
    }
    #java {
      color: #ff6b00;
    }
    #css {
      color: #2598df;
    }
  }
  @media ${device.laptop} {
    img {
      height: 500px;
      width: auto;
      transform: translateX(5rem) translateY(-2rem);
    }
    div {
      display: flex;
      justify-content: space-between;
    }
    .hero-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h3 {
      font-size: 1.8rem;
    }
    p {
      width: 80%;
      font-size: 1.5rem;
    }
  }
`;
const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
export default function HomeHero(props) {
  return (
		<Container>
			<div>
				<img
					src="https://res.cloudinary.com/cnrmtsn/image/upload/v1607888019/personal-site/computerArt.png"
					alt="computer art"
				/>
				<div className="hero-info">
					<h3>
						Hey! I'm Conner Matson{" "}
						<span role="img" aria-label="hand wave">
							👋🏼
						</span>
					</h3>
					<p>
						a web developer with experience in <span id="react">react</span>,{" "}
						<span id="node">Node</span>, <span id="java">Java</span>, and <span id="css">CSS</span>.
						Here you can explore a collection of both personal and professional projects of mine.{" "}
					</p>
				</div>
			</div>
		</Container>
	);
}
