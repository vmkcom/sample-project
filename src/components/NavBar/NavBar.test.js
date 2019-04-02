import React from "react";
import { mount } from "enzyme";
import NavBar from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("NavBar", () => {
	let props;
	let mounted;

	const navBar = () => {
		if (!mounted) {
			mounted = mount(
				<Router>
					<NavBar {...props} />
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

	it("always renders a nav", () => {
		const tags = navBar().find("nav");
		expect(tags.length).toBeGreaterThan(0);
	});

	it("should have links to home and profile", () => {
		const wrapper = navBar();

		expect(wrapper.find('Link').length).toBe(2);
		expect(wrapper.find('Link').at(0).props('to').to).toBe("/");
		expect(wrapper.find('Link').at(1).props('to').to).toBe("/profile");
	});
});
