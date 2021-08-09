import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
        // console.log('handleInputChange llamado...')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('handleSubmit llamado...', inputValue);

        if(inputValue.trim().length > 2){
            // console.log('Submit OK!!!!');
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
          <p>{inputValue}</p>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
