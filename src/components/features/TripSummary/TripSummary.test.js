import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate valid link if props id = abc ', () => {
    const propsId = 'abc';
    const component = shallow(<TripSummary id={propsId} tags={[]} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${propsId}`);
  });

  it('should img have valid src and alt', () => {
    const expectedSrc = 'image';
    const expectedAlt = 'test';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('Are props name, cost, day reneder properly', () => {
    const component = shallow(<TripSummary name={'Lorem Ipsum'} cost={'3.99'} days={2} tags={[]} />);

    expect(component.find('.title').text()).toEqual('Lorem Ipsum');
    expect(component.find('.details span').at(0).text()).toEqual(`${2} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${'3.99'}`);
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array correctly', () => {
    const expectedArray = ['abc', 'def', 'ghi'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
  });

  it('should render tags div if tags is truthy', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});