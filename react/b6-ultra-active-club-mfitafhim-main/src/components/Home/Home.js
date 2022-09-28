import React from 'react';
import Exercises from './Exercises/Exercises';
import './Home.css'
import Info from './Info/Info';

const Home = () => {
    return (
        <div className='row'>
            <div className="activities-container col-9">
                <div className='d-flex'>
                    <img className='logo me-2' src="https://www.pngall.com/wp-content/uploads/2018/04/Gym-Free-Download-PNG.png" alt="" />
                    <h1 className='text-primary'>ACTIVE-GYM-CLUB</h1>
                </div>
                <Exercises></Exercises>
            </div>
            <div className="cart-container col-3">
                <Info></Info>
                <div>
                    <h3>Add A Break</h3>
                    <div className='break d-flex justify-content-between mt-3'>
                        <p>10<span>s</span></p>
                        <p>20<span>s</span></p>
                        <p>30<span>s</span></p>
                        <p>40<span>s</span></p>
                        <p>50<span>s</span></p>
                    </div>
                    <div className="my-5">
                        <h3>Exercise Details</h3>
                        <div className='exercise-detail d-flex align-items-center justify-content-between mt-3'>
                            <h5>Exercise time</h5>
                            <h6>200 Seconds</h6>
                        </div>
                        <div className='exercise-detail d-flex align-items-center justify-content-between mt-3'>
                            <h5>Break time</h5>
                            <h6>200 Seconds</h6>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="button">Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;