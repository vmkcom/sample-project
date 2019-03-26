import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors, fonts, styles } from '../../theme';

export default (props) => {
	return (
		<Button as={props.span ? 'span' : ''} {...props}>
			{props.children}
		</Button>
	);
};

const Button = styled(Link)`
	${styles.button}
	background-color: ${colors.orange};

	width: 150px;
	height: 40px;
	cursor: pointer;

	&:hover {
		text-decoration: none;
	}
`;
