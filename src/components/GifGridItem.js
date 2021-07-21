import React from 'react';

export const GifGridItem = ({title, url}) => {
    return (
        <div>
            <div className="card">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}
