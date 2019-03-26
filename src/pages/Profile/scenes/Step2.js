import React, { Component } from 'react';
import { PageContainer, Button } from '../../../components';
import styled from 'styled-components/macro';

import Form from 'react-bootstrap/Form';

import { countries } from './data/countries';

class Step2 extends Component {
	state = {
		country: '',
		termsConfirmed: false,
	}

	updateForm = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	onSubmit = () => {
		this.props.onFinish(this.state);
	}

	render() {
		const { country, termsConfirmed } = this.state;

		return (
			<PageContainer>
				<h3>Complete Your Profile</h3>
				<Form>
					<HalfRow>
						<Form.Group controlId="country">
							<Form.Label>Country</Form.Label>
							<Form.Control as="select" value={country} onChange={this.updateForm}>
								{countries.map((c, i) => <option key={i}>{c}</option>)}
							</Form.Control>
						</Form.Group>
					</HalfRow>
					<Form.Group controlId="termsConfirmed">
						<Form.Check type="checkbox" label="I agree to terms and conditions" value={termsConfirmed} onChange={this.updateForm} />
					</Form.Group>
					<CenteredButton span onClick={this.onSubmit}>
						Submit
					</CenteredButton>
				</Form>
			</PageContainer>
		);
	}
}

export default Step2;

const CenteredButton = styled(Button)`
	margin: 20px auto;
`;

const HalfRow = styled.div`
	width: 50%;
`;
