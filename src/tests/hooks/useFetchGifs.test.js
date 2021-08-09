import React from 'react';
import '@testing-library/jest-dom';
import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el Hook useFetchGifs', () => {

  test('debe de retornar el estado inicial', async() => {

    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));
    const {data, loading} = result.current;

    // console.log(data, loading);

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('debe de retornar un arreglo de imgs y el loading en false', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));

    await waitForNextUpdate();

    const {data, loading} = result.current;

    // console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })

})
