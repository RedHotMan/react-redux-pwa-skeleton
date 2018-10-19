import React from "react";
import { shallow } from "enzyme";
import { Home } from "../presenter";

describe("HOME TESTING", () => {
  const MockedOwnerName = "Ilyaçe Regaibi",
    MockedGetOwnerName = () => {};

  const wrapper = shallow(
    <Home getOwnerName={MockedGetOwnerName} ownerName={MockedOwnerName} />
  );
  expect(wrapper).toBeDefined();

  it("should render a header with App-header class", () => {
    expect(wrapper.find("header.App-header").length).toEqual(1);
    const header = wrapper.find("header.App-header");

    //header should contain an image
    expect(header.find("img").length).toEqual(1);

    //header should contain a hello world text
    expect(
      header.contains(
        <h1>Hello world, this is react-redux-pwa-skeleton by Ilyaçe Regaibi</h1>
      )
    ).toBeTruthy();

    //header should have a Link element to '/about'
    expect(header.find('Link.btn.btn-info[to="/about"]').length).toEqual(1);
  });
});
