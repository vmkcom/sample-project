import React from "react";
import { mount } from "enzyme";
import Page from "./index";

describe("Page", () => {
	let props;
	let mounted;

	const page = () => {
		if (!mounted) {
			mounted = mount(
				<Page>
					<div className="testdiv"></div>
				</Page>
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
		const tags = page().find("div");
		expect(tags.length).toBeGreaterThan(0);
	});

	it("contains only it's children", () => {
		const childrens = page().children().children().children().children();
		expect(childrens.length).toBe(1);
		expect(childrens.at(0).name()).toBe('div');
		expect(childrens.at(0).is('.testdiv')).toBe(true);
	});
});
