import React from 'react'
import {shallow} from 'enzyme'
import {GifGridItem} from "../../components/GifGridItem";


describe('Pruebas en componente <GifGridItem />', () => {
    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title', () =>{
        const p = wrapper.find('p');
        const parrafo = p.text().trim();

        expect(parrafo).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt al title de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className'));
        const animated = div.prop('className');

        expect(animated.includes('animate__fadeIn')).toBe(true);
    })
})
