import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";

describe("tests on <AppRouter/>", () => {
  const wrapper = mount(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );

  test("should render <AppRouter/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
