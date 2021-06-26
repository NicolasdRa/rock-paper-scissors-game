import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Board } from "../../../../components/screens/Board/Board";

describe("tests on <Board/>", () => {
  test("should render <Board/> correctly", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Board />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
