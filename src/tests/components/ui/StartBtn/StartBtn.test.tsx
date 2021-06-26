import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { StartBtn } from "../../../../components/ui/StartBtn/StartBtn";
import { DataContext } from "../../../../context/DataContext";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const contextValue = {
  setScore: jest.fn(),
  score: 0,
  setPick: jest.fn(),
  pick: "",
};

describe("tests on <StartBtn/>", () => {
  const wrapper = mount(
    <DataContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/game"]}>
        <StartBtn />
      </MemoryRouter>
    </DataContext.Provider>
  );

  test("should render <StartBtn/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should redirect to <Board/> and call setScore onClick", () => {
    wrapper.find("button").prop("onClick")!({} as any);

    expect(mockHistoryPush).toHaveBeenCalledWith("/");
    expect(contextValue.setScore).toHaveBeenCalledWith(0);
  });
});
