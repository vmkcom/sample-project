import React, { Component } from 'react';
import { PageContainer, Button } from '../../../components';
import styled from 'styled-components/macro';

import Form from 'react-bootstrap/Form';

class Step1 extends Component {
	state = {
		firstName: '',
		lastName: '',
		gender: ''
	}

	updateForm = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});

		console.log(this.state);
	}

	onSubmit = () => {
		this.props.onFinish(this.state);
	}

	render() {
		const { firstName, lastName, gender } = this.state;

		return (
			<PageContainer>
				<h3>Complete Your Profile</h3>
				<Form>
					<Form.Row>
						<Form.Group controlId="firstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={this.updateForm} />
						</Form.Group>

						<Form.Group  controlId="lastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={this.updateForm} />
						</Form.Group>
					</Form.Row>
					<HalfRow>
						<Form.Group controlId="gender">
							<Form.Label>Gender</Form.Label>
							<Form.Control as="select" value={gender} onChange={this.updateForm}>
								<option>Male</option>
								<option>Female</option>
								<option>Prefer not to say</option>
							</Form.Control>
						</Form.Group>
					</HalfRow>
					<CenteredButton span onClick={this.onSubmit}>
						Submit
					</CenteredButton>
				</Form>
			</PageContainer>
		);
	}
}

export default Step1;

const CenteredButton = styled(Button)`
	margin: 20px auto;
`;

const HalfRow = styled.div`
	width: 50%;
`;
