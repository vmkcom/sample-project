import React from "react";
import { mount } from "enzyme";
import PageContainer from "./index";

describe("PageContainer", () => {
	let props;
	let mounted;

	const pageContainer = () => {
		if (!mounted) {
			mounted = mount(
				<PageContainer>
					<div className="testdiv"></div>
				</PageContainer>
			);
		}
		return mounted;
	};

	beforeEach(() => {
		props = {

		};

		mounted = undefined;
	});

	it("always renders a section", () => {
		const tags = pageContainer().find("section");
		expect(tags.length).toBeGreaterThan(0);
	});

	it("contains only it's children", () => {
		const childrens = pageContainer().children().children().children().children();
		expect(childrens.length).toBe(1);
		expect(childrens.at(0).name()).toBe('div');
		expect(childrens.at(0).is('.testdiv')).toBe(true);
	});
});
