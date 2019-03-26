import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors, fonts } from '../../theme';

const links = [
	{
		link: '/',
		title: 'Home'
	},
	{
		link: '/profile',
		title: 'Profile'
	}
];

export default (props) => (
	<NavBar>
		{links.map(l => <NavLink key={l.link} to={l.link}>{l.title}</NavLink>)}
	</NavBar>
);

const NavBar = styled.nav`
	height: 60px;
	width: 100%;

	display: flex;
	background-color: ${colors.brown};

	align-items: center;

	padding: 0 20px;
`;

const NavLink = styled(Link)`
	${fonts.nav}
	text-transform: uppercase;

	padding: 0 20px;
	position: relative;

	&:after {
		content: "|";
		position: absolute;
		top: 0;
		right: -5px;
		pointer-events: none;
		cursor: default;
	}

	&:last-child:after {
		display: none;
	}

	&:before {
		content: "";
		position: absolute;
		top: -20px;
		left: -2px;
		right: -2px;
		bottom: -20px;
	}
`;
