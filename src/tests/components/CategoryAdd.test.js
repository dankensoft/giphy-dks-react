import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import {CategoryAdd} from "../../components/CategoryAdd";

describe('Pruebas en componente <CategoryAdd />', () => {
    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

    beforeEach( () => {
      jest.clearAllMocks();
      wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
    })

    test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
      const input = wrapper.find('input')
      const value = 'Hola DKS'

      input.simulate('change', {
        target: {
          value: value
        }
      })

      expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('NO debe de postear la información con Submit', () => {
      wrapper.find('form').simulate('submit',{preventDefault: () => {}});

      expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
      const value = 'Hola DKS';

      // 1.- Simular el inputChange
      wrapper.find('input').simulate('change', {target: {value}});

      // 2.- Simular el Submit
      wrapper.find('form').simulate('submit', {preventDefault(){}});

      // 3.- setCategories se debe de haber llamado
      expect( setCategories ).toHaveBeenCalled();

      // 4.- setCategories se debe de haber llamado 1 vez como tiempo
      expect( setCategories ).toHaveBeenCalledTimes(1);

      // 5.- setCategories se debe de haber llamado como Función
      expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

      // 6.- El valor del Input debe de estar ''
      expect( wrapper.find('input').prop('value') ).toBe('');
    })
})
