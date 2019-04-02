import React from "react";
import { mount } from "enzyme";
import SideBar, { MenuItem } from "./index";

describe("SideBar", () => {
	let props;
	let mounted;

	const sideBar = () => {
		if (!mounted) {
			mounted = mount(
				<SideBar />
			);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {

		};

		mounted = undefined;
	});

	it("always renders a ul", () => {
		const tags = sideBar().find("ul");
		expect(tags.length).toBeGreaterThan(0);
	});

	it("should have 3 list items", () => {
		const tags = sideBar().find("ul");
		expect(tags.children().length).toBe(3);
	});

	it("should have active item", () => {
		const tags = sideBar().find(MenuItem);
		let active = false;

		tags.forEach(tag => {
			if (tag.props('active')) active = true;
		});

		expect(active).toBe(true);

	});
});
