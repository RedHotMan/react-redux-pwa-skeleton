import React from 'react';
import { shallow } from 'enzyme';
import About from '../index';

describe('ABOUT TESTING', () => {
  const wrapper = shallow(<About/>);

  it('should display an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual("About Page");
  })

  it('should display a button', () => {
    expect(wrapper.find('Button[label="Go back to home"].btn-info').length).toEqual(1);
  })
})
