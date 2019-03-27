import React from 'react';
import styled from 'styled-components/macro';
import { colors, fonts, breakpoints } from '../../theme';

export default (props) => (
	<PageContainer className={props.className}>
		{props.children}
	</PageContainer>
);

const PageContainer = styled.section`

	flex: 1;

	font-size: 1rem;
	line-height: 1.2;

	margin: 3rem auto;
	padding: 0 2rem;
	max-width: 600px;
	justify-self: stretch;

	h3 {
		${fonts.title}
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	p {
		margin-bottom: 2rem;
	}

	@media (max-width: ${breakpoints.mobile}) {
		max-width: 95%;

		flex-grow: 1;
		height: 100%;
		padding-top: 5rem;
	}
`;
