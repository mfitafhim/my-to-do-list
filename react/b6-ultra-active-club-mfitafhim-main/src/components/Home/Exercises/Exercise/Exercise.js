import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise }) => {
    console.log(exercise);
    const { name, img, title, timeRequired } = exercise
    return (
        <div className='exercise'>
            <img className='img' src={img} alt="" />
            <h5 className='my-3'>{name}</h5>
            <p>Website: {title}</p>
            <p>Time Required: {timeRequired}</p>
            <div class="d-grid">
                <button class="btn btn-primary" type="button">Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;