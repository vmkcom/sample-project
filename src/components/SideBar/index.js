import React from 'react';
import styled from 'styled-components/macro';
import { colors, fonts, breakpoints } from '../../theme';

export default (props) => (
	<SideBar className={props.className}>
		<MenuItem active>Home</MenuItem>
		<MenuItem>Settings</MenuItem>
		<MenuItem>Logout</MenuItem>
	</SideBar>
);

const SideBar = styled.ul`

	width: 200px;
	justify-self: start;

	margin: 3rem 1rem;

	@media (max-width: ${breakpoints.mobile}) {
		margin: auto;
		display: flex;

		justify-content: space-between;
		width: 85%;
	}
`;

const MenuItem = styled.li`
	height: 60px;
	line-height: 0;
	display:flex;

	align-items: center;
	font-size: 1.5rem;
	padding-left: 1rem;
	border: 1px solid white;

	color: ${props => props.active ? 'white' : colors.orange};
	cursor: pointer;
	position: relative;

	@media (max-width: ${breakpoints.mobile}) {
		border: none;
		min-width: 80px;
		height: 80px;
		padding: 0;

		justify-content: center;

		&:before {
			position: absolute;
			content: "";

			border: 1px solid white;
			width: 50px;
			height: 50px;

			left: 50%;
			transform: translateX(-50%);
			top: -40px;
		}
	}
`;
