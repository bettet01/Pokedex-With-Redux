import Paginator from "./paginator";
import {mount} from "enzyme";
import React from "react";


describe("Paginator", () => {
  let component;
  let fetchDataFunction = jest.fn((data: number) => {
    return data;
  });

  it('should change the page', function () {
    component = mount(<Paginator fetchData={fetchDataFunction} count={23} />)
    component.find('[aria-label="Page 2"]').simulate('click');
    expect(fetchDataFunction).toHaveBeenCalled();
  });
})