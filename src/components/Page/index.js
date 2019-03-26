import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../../theme';

// Basic Layout component

export default (props) => (
	<Page className={props.className}>
		{props.children}
	</Page>
);

const Page = styled.div`

	height: 100vh;
	display: flex;

	flex-direction: column;
	background-color: ${colors.darkBlue};
`;
