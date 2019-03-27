
export const colors = {
	orange: '#BC4123',
	darkBlue: '#0B172A',
	brown: '#463940',
};

export const fonts = {

	title: `
		font-weight: 700;
		font-family: Lato;
		letter-spacing: 3px;
	`,

	body: `
		font-weight: 400;
		font-family: Lato;
	`,

	nav: `
		font-weight: 400;
		letter-spacing: 2px;
	`,
};

export const styles = {
	button: `
		padding: 0 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
	`
};

export const breakpoints = {
	tablet: '768px',
	desktop: '1024px',
	mobile: '520px',
};


export const formStyles = `
	text-align: center;

	.was-validated {
		*:invalid {
			border-color: red;
		}
	}

	.form-group {
		margin: 1rem;

	}

	.form-row {
		margin: 0;

		@media (max-width: ${breakpoints.mobile}) {
			display: flex;
			align-items: center;
			flex-direction: column;

		}
	}

	.form-label {
		margin-bottom: 0.5rem
	}


	form {
		@media (max-width: ${breakpoints.mobile}) {
			display: flex;
			align-items: center;
			flex-direction: column;

		}
	}
`;
