import React, { Component } from 'react';
import { PageContainer, SubmitButton } from '../../../components';
import { breakpoints } from '../../../theme';
import styled from 'styled-components/macro';
import Form from 'react-bootstrap/Form';

class Step1 extends Component {
	state = {
		firstName: '',
		lastName: '',
		gender: '',
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

		if (form.checkValidity() === false) {
			e.stopPropagation();
			e.preventDefault();
		} else {
			this.props.onFinish(formData);
		}

		this.setState({validated: true});
	}


	render() {
		const { firstName, lastName, gender, validated } = this.state;

		return (
			<PageContainer>
				<h3>Complete Your Profile</h3>
				<Form noValidate
    				validated={validated}
        			onSubmit={this.onSubmit}
        		>
					<Form.Row>
						<Form.Group controlId="firstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control required type="text" placeholder="Enter your first name" value={firstName} onChange={this.updateForm} />
						</Form.Group>

						<Form.Group  controlId="lastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control required type="text" placeholder="Enter your last name" value={lastName} onChange={this.updateForm} />
						</Form.Group>
					</Form.Row>
					<HalfRow>
						<Form.Group controlId="gender">
							<Form.Label>Gender</Form.Label>
							<Form.Control required as="select" value={gender} onChange={this.updateForm}>
								<option disabled></option>
								<option>Male</option>
								<option>Female</option>
								<option>Prefer not to say</option>
							</Form.Control>
						</Form.Group>
					</HalfRow>
					<Form.Group controlId="submit">
						<CenteredButton	>
							Submit
						</CenteredButton>
					</Form.Group>
				</Form>
			</PageContainer>
		);
	}
}

export default Step1;

const CenteredButton = styled(SubmitButton)`
	margin: 4rem auto;

	@media (max-width: ${breakpoints.mobile}) {
		margin: 1rem 0;
	}
`;

const HalfRow = styled.div`
	width: 50%;

	@media (max-width: ${breakpoints.mobile}) {
		width: 100%;
		max-width: 225px;
	}
`;
