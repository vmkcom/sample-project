import React from "react";
import { mount } from "enzyme";
import Profile, { SidebarLayout } from "./index";
import { PageContainer, ActionBar, SideBar } from '../../components';
import { Intro, Step1, Step2, Done } from './scenes';
import { MemoryRouter as Router, Switch } from 'react-router-dom';

describe("Profile", () => {
	let props;
	let mounted;

	const profile = (route = '/') => {
		if (!mounted) {
			mounted = mount(
				<Router initialEntries={[route]} initialIndex={0}>
					<Profile {...props} />
				</Router>
			);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {

		};

		mounted = undefined;
	});

	it("always renders a Layout and actionBar for", () => {
		const tags = profile().find(SidebarLayout);
		expect(tags.length).toBeGreaterThan(0);

		const actionBar = profile().find(ActionBar);
		expect(actionBar.length).toBeGreaterThan(0);
	});

	it("doesn't render action bar at Done step", () => {
		const tags = profile('/profile/done').find(SidebarLayout);
		expect(tags.length).toBeGreaterThan(0);

		const actionBar = profile('/profile/done').find(ActionBar);
		expect(actionBar.length).toBe(0);
	});

	it("should render a form on step1", () => {
		const tags = profile('/profile/step1').find(Step1);
		expect(tags.length).toBeGreaterThan(0);

		const form = profile('/profile/step1').find('form');
		expect(form.length).toBeGreaterThan(0);
	});

	it("empty form should be invalid", () => {
		const step1 = profile('/profile/step1').find(Step1);
		expect(step1.length).toBeGreaterThan(0);

		step1.find('form').simulate('submit');
		expect(step1.find('form').getDOMNode().checkValidity()).toBe(false);
	});

	it("submitting valid form should bring you to next step", () => {
		const profileTag = profile('/profile/step1');
		const step1 = profileTag.find(Step1);
		expect(step1.length).toBeGreaterThan(0);

		step1.setState({ firstName: 'John', lastName: 'Smith', gender: 'Male' });
		step1.find('form').simulate('submit');

		expect(profileTag.find(Step2).length).toBeGreaterThan(0);

	});

	it("should render a form on step2", () => {
		const tags = profile('/profile/step2').find(Step2);
		expect(tags.length).toBeGreaterThan(0);

		const form = profile('/profile/step2').find('form');
		expect(form.length).toBeGreaterThan(0);
	});

	it("empty form should be invalid", () => {
		const step2 = profile('/profile/step2').find(Step2);
		expect(step2.length).toBeGreaterThan(0);

		step2.find('form').simulate('submit');
		expect(step2.find('form').getDOMNode().checkValidity()).toBe(false);
	});

	it("submitting valid form should bring you to next step", async () => {
		const profileTag = profile('/profile/step2');
		const step2 = profileTag.find(Step2);
		expect(step2.length).toBeGreaterThan(0);

		await step2.props().onFinish({ country: 'New Zealand', termsConfirmed: true });
		profileTag.update();

		expect(profileTag.find(Done).length).toBeGreaterThan(0);

	});
});
