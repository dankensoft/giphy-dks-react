import React, {useState} from 'react';
import {CategoryAdd} from "./components/CategoryAdd";
import {GifGrid} from "./components/GifGrid";

export const GifDks = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    // const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter']);
        // setCategories(cats => [...cats, 'HunterXHunter']);
    // }
    return(
        <>
            <h2>GifDKS</h2>
            <CategoryAdd setCategories={setCategories}/>
            <hr />
            {/*<button onClick={handleAdd}>Add(+)</button>*/}
            <ol>
                {
                    categories.map(category => (
                        // return <li key={category}> {category} </li>
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
