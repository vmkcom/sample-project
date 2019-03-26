import React from 'react';
import styled from 'styled-components/macro';
import { colors, fonts } from '../../theme';

export default (props) => (
	<PageContainer className={props.className}>
		{props.children}
	</PageContainer>
);

const PageContainer = styled.section`

	flex: 1;

	font-size: 1rem;
	line-height: 1.2;

	margin: 50px auto;
	max-width: 600px;

	h3 {
		${fonts.title}
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	p {
		margin-bottom: 2rem;
	}
`;
