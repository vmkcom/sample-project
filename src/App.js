import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

import { Page, NavBar } from './components';
import Home from './pages/Home';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
	${reset}

	body {
		font-family: 'Lato', sans-serif;
		font-size: 16px;
		color: white;
	}

	a {
		color: white;
		text-decoration: none;

		&:visited {
			color: white;
		}
	}

	.form-group {
		margin: 1rem;
	}

	.form-label {
		margin-bottom: 0.5rem
	}

	/* other styles */
`;

class App extends Component {
	render() {
		return (
			<>
				<GlobalStyle />

				<Page>
					<Router>
						<Switch>
							<Route path="/" exact>
								<NavBar />
								<Home />
							</Route>
							<Route path="/profile" component={Profile} />
						</Switch>
					</Router>
				</Page>
			</>
		);
	}
}

export default App;
