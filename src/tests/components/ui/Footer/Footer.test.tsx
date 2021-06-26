import "@testing-library/jest-dom";
import { mount, ReactWrapper } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "../../../../components/ui/Footer/Footer";

describe("tests on <Footer/>", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  test("should render <Footer/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
