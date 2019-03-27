import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors, fonts, styles, breakpoints } from '../../theme';

const Bar = (props) => (
	<ActionBar>
		<ButtonsContainer>
			<Button as="span" onClick={props.history.goBack}>{'< Back'}</Button>
			<Button to="/">{'X Close'}</Button>
		</ButtonsContainer>
	</ActionBar>
);

const ActionBar = styled.nav`
	height: 60px;
	width: 100%;
	margin: 0 auto;

	display: flex;
	flex-shrink: 0;
	background-color: ${colors.brown};

	align-items: center;

	@media (max-width: ${breakpoints.mobile}) {
		background-color: transparent;
	}
`;

const ButtonsContainer = styled.div`
	justify-content: space-between;
	display: flex;
	width: 100%;

	margin: 0 20px;
`;

const Button = styled(Link)`
	${styles.button}
	width: 90px;
	height: 40px;

	background-color: ${colors.orange};
	cursor: pointer;

`;

export default withRouter(Bar);
