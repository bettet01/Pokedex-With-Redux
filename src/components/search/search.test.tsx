import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Search from "./Serach";

describe("Pokemon Info Component", () => {
  let component: ShallowWrapper<any, any>;
  let rootComponent: ShallowWrapper<
    any,
    React.Component["state"],
    React.Component
  >;
  const mockHistory = {
    push: () => {},
  };
  const setup = (data: any) => {
    rootComponent = shallow(<Search history={mockHistory} />);
    component = rootComponent;
  };

  it("should change the search on input", function () {
    setup({});
    component
      .find('input[type="text"]')
      .simulate("change", { target: { value: "text" } });
    expect(component.find("input").prop("value")).toEqual("text");
  });
  it("should push to new page on click", function () {
    const spy = spyOn(mockHistory, "push");
    setup({});
    component.find("button").simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
