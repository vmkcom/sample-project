import React, { Component } from 'react';
import { PageContainer, Button } from '../../../components';
import styled from 'styled-components/macro';

class Intro extends Component {
	render() {
		return (
			<PageContainer>
				<h3>Introduction</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<CenteredButton to="/profile/step1">Proceed</CenteredButton>
			</PageContainer>
		);
	}
}

export default Intro;

const CenteredButton = styled(Button)`
	margin: 20px auto;
`;
