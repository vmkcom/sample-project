import React, { Component } from 'react';
import { PageContainer, Button } from '../../../components';
import styled from 'styled-components/macro';

class Done extends Component {
	render() {
		return (
			<PageContainer>
				<h3>All Set</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<CenteredButton to="/">Done</CenteredButton>
			</PageContainer>
		);
	}
}

export default Done;

const CenteredButton = styled(Button)`
	margin: 20px auto;
`;
