import React from 'react';
import './Info.css'
const Info = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <img className='my-img me-4' src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/297003139_1703169190053657_6021645063101514724_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xKgcw0nf3MgAX8JxSwB&_nc_oc=AQkKHfbizdkjfj0aTwckLuiXyN59q0c8JmB0RMZ0XFQVIElnHaH6Exb4LXQw-XAe0v8&_nc_ht=scontent.fdac7-1.fna&oh=00_AT-D1tsjqW86mmE3J_6tob5VAfnWsQQv9gproPdcbjcD0A&oe=63395596" alt="" />
                <div>
                    <h5>Mfi Tafhim</h5>
                    <h6 className='text-primary'>University of Dhaka</h6>
                </div>
            </div>
            <div className='my-info my-5 d-flex justify-content-between'>
                <div>
                    <h5>80<span>kg</span></h5>
                    <h6 className='text-primary'>Weight</h6>
                </div>
                <div>
                    <h5>6.00</h5>
                    <h6 className='text-primary'>Height</h6>
                </div>
                <div>
                    <h5>20<span>yrs</span></h5>
                    <h6 className='text-primary'>Age</h6>
                </div>
            </div>
        </div>
    );
};

export default Info;