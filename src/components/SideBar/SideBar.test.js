import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

const closeNavMock = jest.fn();

const defaultProps = {
  closeNav: closeNavMock,
  isOpen: false,
  categoryId: 'jobs',
  cityId: 'perth',
};

it('should match Snapshot', () => {
  const component = shallow(
    <SideBar {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should apply a class to open the component', () => {
  const component = shallow(
    <SideBar
      {...defaultProps}
      isOpen={true}
    />
  );

  const sideBar = component.find('.wrapper');

  expect(sideBar.hasClass('showOpen')).toBe(true);
});

it('should close the nav when the button is clicked', () => {
  const component = shallow(
    <SideBar {...defaultProps} />
  );

  component.find('.button').simulate('click');

  expect(closeNavMock).toHaveBeenCalledTimes(1);
});