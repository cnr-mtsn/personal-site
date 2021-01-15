import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";
import { theme } from "../utils/style";

const Container = styled.div`
	width: 60%;
	border-radius: 10px;
	margin: 2rem 0;
	padding: 1rem 0 2rem 0;
	background: ${theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	align-items: center;
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		width: 80%;
		height: auto;
		border-radius: 5px;
		box-shadow: 1px 1px 10px 2px ${theme.colors.blue};
	}
	figcaption {
		color: ${theme.colors.offWhite};
		padding: 0 0 1rem 0;
		text-align: center;
		font-family: "codePro";
		font-size: 1.5rem;
	}
	p {
		color: ${theme.colors.offWhite};
		width: 80%;
		font-family: sans-serif, "codeProLight", "Courier New", Courier, monospace;
		font-weight: 300;
		font-size: 1rem;
		text-align: center;
		line-height: 150%;
	}
	button {
		padding: 0.5rem;
		border: none;
		width: auto;
		font-size: 0.9rem;
		background: ${theme.colors.tangerine};
		box-shadow: 1px 1px 15px ${theme.colors.blue};
		border-radius: 10px;
		a {
			text-decoration: none;
			font-family: "codePro";
			text-transform: capitalize;
		}
	}
	@media ${device.laptop} {
		width: 30vw;
	}
`;
export default function HomeProjectCard({ project }) {
	return (
		<Container>
			<figure>
				<figcaption>{project.name}</figcaption>
				<img src={project.img} alt={project.name} />
				{project.description && <p>{project.description}</p>}
			</figure>
			<button>
				<a href={project.url}>check it out</a>
			</button>
		</Container>
	);
}
