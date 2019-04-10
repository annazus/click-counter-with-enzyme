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

test("renders a decrement button ", () => {
  const wrapper = setUp(App);
  const button = fetchComponent(wrapper, "component-app-button-decrement");
  expect(button.length).toBe(1);
});
test("on clicking decrement button, count display increments", () => {
  const wrapper = setUp(App, { count: 7 });
  const button = fetchComponent(wrapper, "component-app-button-decrement");
  button.simulate("click");
  const displayComponent = fetchComponent(wrapper, "component-app-display");
  console.log(displayComponent.debug());
  expect(displayComponent.text()).toContain("6");
});
test("on clicking decrement button, count display increments", () => {
  const wrapper = setUp(App, { count: 0 });
  const button = fetchComponent(wrapper, "component-app-button-decrement");
  button.simulate("click");
  const displayComponent = fetchComponent(wrapper, "component-app-display");
  console.log(displayComponent.debug());
  expect(displayComponent.text()).toContain("0");
});
test("on clicking decrement button when count is 0, error message is displayed", () => {
  const wrapper = setUp(App, { count: 0 });
  const button = fetchComponent(wrapper, "component-app-button-decrement");
  button.simulate("click");
  const displayComponent = fetchComponent(
    wrapper,
    "component-app-display-error"
  );
  console.log(displayComponent.debug());
  expect(displayComponent.text().length).toBeGreaterThan(0);
});

test("on clicking increment button when error is displayed, error is cleared", () => {
  const wrapper = setUp(App, { count: 0, error: "Cannot decrement counter" });
  const button = fetchComponent(wrapper, "component-app-button");
  button.simulate("click");
  const displayComponent = fetchComponent(
    wrapper,
    "component-app-display-error"
  );
  console.log(displayComponent.debug());
  expect(displayComponent.text().length).toBe(0);
});
