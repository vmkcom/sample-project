import React, { Component } from 'react';
import { PageContainer, SubmitButton } from '../../../components';
import styled from 'styled-components/macro';
import Form from 'react-bootstrap/Form';

import { countries } from './data/countries';

class Step2 extends Component {
	state = {
		country: 'Australia',
		termsConfirmed: false,
		validated: false,
	}

	updateForm = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	onSubmit = (e) => {
		const form = e.currentTarget;
		const {validated, ...formData} = this.state;
		e.stopPropagation();
		e.preventDefault();

		if (form.checkValidity() === true) {
			return this.props.onFinish(formData);
		}

		this.setState({validated: true});
	}

	render() {
		const { country, termsConfirmed, validated } = this.state;

		return (
			<PageContainer>
				<h3>Complete Your Profile</h3>
				<Form noValidate
					validated={validated}
					onSubmit={this.onSubmit}
				>
					<HalfRow>
						<Form.Group controlId="country">
							<Form.Label>Country</Form.Label>
							<Form.Control as="select" value={country} onChange={this.updateForm}>
								{countries.map((c, i) => <option key={i}>{c}</option>)}
							</Form.Control>
						</Form.Group>
					</HalfRow>
					<Form.Group controlId="termsConfirmed">
						<Form.Check required type="checkbox" label="I agree to terms and conditions" value={termsConfirmed} onChange={this.updateForm} />
					</Form.Group>
					<CenteredButton>
						Submit
					</CenteredButton>
				</Form>
			</PageContainer>
		);
	}
}

export default Step2;

const CenteredButton = styled(SubmitButton)`
	margin: 20px auto;
`;

const HalfRow = styled.div`
	width: 50%;
`;
