import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../store';
import App from '../App';

it('renders without crashing', () => {
  const wrapper = shallow(<App store={store} />);
  expect(wrapper).toBeDefined();
});
