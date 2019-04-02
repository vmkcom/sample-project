import React from "react";
import { mount } from "enzyme";
import ActionBar from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("ActionBar", () => {
	let props;
	let mounted;

	const actionBar = () => {
		if (!mounted) {
			mounted = mount(
				<Router>
					<ActionBar {...props} />
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

	it("always renders a div", () => {
		const divs = actionBar().find("div");
		expect(divs.length).toBeGreaterThan(0);
	});
});
