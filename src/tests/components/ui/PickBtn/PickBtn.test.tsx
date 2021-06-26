import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PickBtn } from "../../../../components/ui/PickBtn/PickBtn";
import { DataContext } from "../../../../context/DataContext";

const contextValue = {
  setScore: jest.fn(),
  score: 0,
  setPick: jest.fn(),
  pick: "",
};

describe("tests on <PickBtn/>", () => {
  const type = "rock";

  test("should render <PickBtn/> correctly", () => {
    const wrapper = mount(
      <DataContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/board"]}>
          <PickBtn type={type} />
        </MemoryRouter>
      </DataContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
  test("should call setPick onClick if not disabled", () => {
    const wrapper = mount(
      <DataContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/board"]}>
          <PickBtn type={type} />
        </MemoryRouter>
      </DataContext.Provider>
    );

    wrapper.find("a").prop("onClick")!({} as any);
    expect(contextValue.setPick).toHaveBeenCalledWith("rock");
  });

  test("should not call setPick onClick if disabled", () => {
    const wrapper = mount(
      <DataContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/board"]}>
          <PickBtn type={type} disabled />
        </MemoryRouter>
      </DataContext.Provider>
    );

    wrapper.find("a").prop("onClick")!({} as any);
    expect(contextValue.setPick).toHaveBeenCalledTimes(0);
  });
});
