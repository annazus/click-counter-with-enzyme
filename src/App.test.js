import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { setUp, fetchComponent } from "./utils/test/testUtils";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = setUp(App);
});

test("renders the App component", () => {
  const wrapper = setUp(App);
  const appComponent = fetchComponent(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders a counter display", () => {
  const wrapper = setUp(App);
  const displayComponent = fetchComponent(wrapper, "component-app-display");
  expect(displayComponent.length).toBe(1);
});
test("renders a button ", () => {
  const wrapper = setUp(App);
  const button = fetchComponent(wrapper, "component-app-button");
  expect(button.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setUp(App);
  expect(wrapper.state().count).toBe(0);
});

test("on clicking button, count display increments", () => {
  const wrapper = setUp(App, { count: 7 });
  const button = fetchComponent(wrapper, "component-app-button");
  button.simulate("click");
  const displayComponent = fetchComponent(wrapper, "component-app-display");
  console.log(displayComponent.debug());
  expect(displayComponent.text()).toContain("8");
});
