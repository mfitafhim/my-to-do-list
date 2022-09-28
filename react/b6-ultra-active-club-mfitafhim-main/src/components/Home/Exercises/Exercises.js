import React, { useEffect, useState } from 'react';
import Exercise from './Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <h4 className='py-5'>Select today’s exercise</h4>
            <div className='exercises'>
                {
                    exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;