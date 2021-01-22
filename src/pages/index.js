import * as React from "react";
import Home from "./Home";
import Contact from "./Contact";

import { Router } from "@reach/router";

const IndexPage = () => (
	<Router>
		<Home path="/" />
		<Contact path="/contact" />
	</Router>
);

export default IndexPage;
