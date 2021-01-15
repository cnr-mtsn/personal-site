import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import HomeHero from "../components/HomeHero";
import HomeProjects from "../components/HomeProjects";
import { PageWrapper } from "../utils/style";

const Container = styled.div`
	margin: 0;
	padding: 0;
`;

export default function Home() {
	return (
		<PageWrapper>
			<Container>
				<Helmet>
					<title>Conner Matson</title>
					<meta
						name="keywords"
						content="Conner Matson, CNR.MTSN, CNR_MTSN, cnr_mtsn, cnr.mtsn, conner matson, web development, frontend, react, javascript, developer, css, html"
					/>
					<meta
						name="description"
						content="I'm Conner Matson, a junior web developer actively working on and seeking new freelance projects. Need a site but don't want to break the bank? Let's work together!"
					/>
				</Helmet>
				<HomeHero />
				<HomeProjects />
			</Container>
		</PageWrapper>
	);
}
