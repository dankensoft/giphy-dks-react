import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import {GifDks} from '../GifDks'

describe('Pruebas en <GifDks />', () => {

  test('debe de mostrarse correctamente', () => {
    const wrapper = shallow(<GifDks />);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Goku'];
    const wrapper = shallow(<GifDks defaultCategories = {categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })

})
