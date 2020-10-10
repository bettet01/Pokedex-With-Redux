import React from "react";
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import Search from "./Serach";

describe("Pokemon Info Component", () => {
  let component: ReactWrapper<any, React.Component["state"], React.Component>;
  const mockHistory = {
    push: () => {},
  };
  const setup = (data: any) => {
    component = mount(<Search history={mockHistory} />);
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
