import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { RulesModal } from "../../../../components/ui/RulesModal/RulesModal";

describe("tests on <RulesModal/>", () => {
  const wrapper = mount(<RulesModal />);

  test("should render <RulesModal/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
