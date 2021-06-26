import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Game } from "../../../../components/screens/Game/Game";
import { DataContext } from "../../../../context/DataContext";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

afterEach(() => {
  jest.useRealTimers();
});

describe("tests on <Game/>", () => {
  const contextValue = {
    setScore: jest.fn(),
    score: 8,
    setPick: jest.fn(),
    pick: "rock",
  };

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <DataContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/game"]}>
          <Game />
        </MemoryRouter>
      </DataContext.Provider>
    );
  });

  test("should render <Game/> correctly", () => {
    expect(wrapper).not.toBeNull();
  });

  test("shouldn't show results and housePick at mount", () => {
    expect(wrapper.find("#housePick").exists()).toBe(false);
    expect(wrapper.find("#playBtn").exists()).toBe(false);
  });

  test("should show score consumed from context", () => {
    expect(wrapper.find("h3").at(4).text().trim()).toBe("8");
  });
});
