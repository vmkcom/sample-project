import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { breakpoints } from '../../theme';
import { PageContainer, ActionBar, SideBar } from '../../components';

import { Intro, Step1, Step2, Done } from './scenes';
import { submitProfile } from '../../api/profile';

import styled from 'styled-components/macro';


class Profile extends Component {

	state = {
		firstName: '',
		lastName: '',
		gender: '',
		country: ''
	}

	updateData = (values, cb) => {
		this.setState(values, cb);

		this.props.history.push('/profile/step2');
	}

	submitForm = (values) => {
		return new Promise(resolve => {
			this.setState(values, () => {
				let data = this.state;
				submitProfile(data, (response) => {
					if (response.data && response.data.id) {
						this.props.history.push('/profile/done');
					}

					resolve(response.data);
				});
			});
		});
	}

	render() {
		return (
			<>
				<Switch>
					<Route path="/profile/done">

					</Route>
					<Route path="/">
						<ActionBar />
					</Route>

				</Switch>
				<SidebarLayout>
					<StyledSideBar />
					<Switch>
						<Route path="/profile/intro" component={Intro} />
						<Route path="/profile/step1">
							<Step1 onFinish={this.updateData} />
						</Route>
						<Route path="/profile/step2">
							<Step2 onFinish={this.submitForm} />
						</Route>
						<Route path="/profile/done" component={Done} />
						<Route path="/profile">
							<Redirect to="/profile/intro" />
						</Route>
					</Switch>
				</SidebarLayout>
			</>
		);
	}
}

export const SidebarLayout = styled.div`
	display: flex;

	justify-content: center;

	@media (max-width: ${breakpoints.mobile}) {
		flex-direction: column;
		height: 100%;
	}
`;

const StyledSideBar = styled(SideBar)`
	@media (max-width: ${breakpoints.mobile}) {
		order: 1;
		align-self: center;
	}
`;

export default withRouter(Profile);
