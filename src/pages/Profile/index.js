import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { PageContainer, ActionBar } from '../../components';

import { Intro, Step1, Step2, Done } from './scenes';
import { submitProfile } from '../../api/profile';


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
		this.setState(values, () => {

			let data = this.state;
			submitProfile(data, (response) => {
				this.props.history.push('/profile/done');
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
				<PageContainer>
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
				</PageContainer>
			</>
		);
	}
}

export default withRouter(Profile);
