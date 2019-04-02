import React from "react";
import { mount } from "enzyme";
import Button, { SubmitButton } from "./index";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Button", () => {
	let props;
	let mounted;

	const button = () => {
		if (!mounted) {
			mounted = mount(
				<Router>
					<Button {...props} />
				</Router>
			);
		}
		return mounted;
	};

	const submitButton = () => {
		if (!mounted) {
			mounted = mount(
				<Router>
					<SubmitButton {...props} />
				</Router>
			);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {
			to: "/test"
		};

		mounted = undefined;
	});

	it("always renders a <a> tag", () => {
		const tags = button().find("a");
		expect(tags.length).toBeGreaterThan(0);
	});

	it('includes link to test', function() {
		const wrapper = button();
		expect(wrapper.find('Link').prop('to')).toBe('/test');
	});

	it('should be submit button if used in form', function() {
		const button = submitButton().find('button');
		expect(button.prop('type')).toBe('submit');
	});
});
