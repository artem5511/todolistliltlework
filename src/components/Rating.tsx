import React from 'react';
import Star from './Star';

const Rating = () => {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
};

export default Rating;