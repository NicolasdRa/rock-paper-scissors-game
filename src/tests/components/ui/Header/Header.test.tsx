import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Header } from "../../../../components/ui/Header/Header";
import { DataContext } from "../../../../context/DataContext";

const contextValue = {
  setScore: jest.fn(),
  score: 5,
  setPick: jest.fn(),
  pick: "",
};

describe("tests on <Header/>", () => {
  const wrapper = mount(
    <DataContext.Provider value={contextValue}>
      <Header />
    </DataContext.Provider>
  );
  test("should render <Header/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show score received from value set in Context", () => {
    expect(wrapper.find("h3").last().text()).toBe("5");
  });
});
