import React from "react";
import { Button } from "../buttons";
import { shallow } from "enzyme";

describe("BUTTONS ATOM TESTING", () => {
  it("should render a button with default text, type and className", () => {
    const defaultButtonWrapper = shallow(<Button />);

    expect(
      defaultButtonWrapper.find('button[type="button"].btn').length
    ).toEqual(1);

    expect(
      defaultButtonWrapper.find('button[type="button"].btn').text()
    ).toEqual("This is a button");
  });

  it("should render a button with the given label, type and classNames", () => {
    const className = "btn-test",
      label = "Given label",
      type = "submit";

    const buttonWrapper = shallow(
      <Button label={label} className={className} type={type} />
    );

    expect(
      buttonWrapper.find('button[type="submit"].btn.btn-test').length
    ).toEqual(1);

    expect(
      buttonWrapper.find('button[type="submit"].btn.btn-test').text()
    ).toEqual("Given label");
  });
});
