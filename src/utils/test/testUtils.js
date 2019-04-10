import Enzyme, { shallow } from "enzyme";
import React from "react";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setUp
 * @param {object} component - React component for which a shallow wrapper isi needed.
 * @param {any} state - Initial state of component
 * @param {*} props - Component props
 * @returns {ShallowWrapper}
 */
function setUp(component, state = {}, props = {}) {
  const Component = component;
  const wrapper = shallow(<Component {...props} />);
  wrapper.setState(state);
  return wrapper;
}

/**
 * Returns node from ShallowWrapper with the given dataAttributeName
 * @param {ShallowWrapper} shallowWrapper - Enzyme shallow wrapper to search withing
 * @param {string} val - Value of data-test-attribute
 */

function fetchComponent(shallowWrapper, val) {
  const component = shallowWrapper.find(`[data-test="${val}"]`);
  return component;
}

export { setUp, fetchComponent };
