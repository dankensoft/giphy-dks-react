import React, {useState, useEffect} from 'react';
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // Custom Hook
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className=" animate__animated animate__fadeIn">
                { category }
            </h3>

            {loading && <p className=" animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        // <li key={id}>{title}</li>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
