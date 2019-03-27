import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors, styles } from '../../theme';

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

const SubmitButton = styled(Button).attrs({
	as: 'button',
	type: 'submit'
})``;

export default Button;

export { SubmitButton };
