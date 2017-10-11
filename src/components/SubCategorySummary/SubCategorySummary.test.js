import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './SubCategorySummary';

jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  colorName: 'jobs',
  tint: '020',
  shade: '600',
  name: 'Mock sub category',
  indicatorIds: [
    'population',
  ],
  cities: [
    {
      name: 'Perth',
      indices: {}
    },
    {
      name: 'Sydney',
      indices: {}
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
