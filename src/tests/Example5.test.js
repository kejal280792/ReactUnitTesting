import React from 'react';
import renderer from 'react-test-renderer';
import Example5 from '../Examples/Example5';

describe('DisplayName', () => {
  test('Should render Vrushali', () => {
    const component = renderer.create(<Example5 name={'Vrushali Test 123'} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
