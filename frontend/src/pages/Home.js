import React from 'react';
import illustrationImage from '../images/background-illustration.svg'
const Home = () => {
    return (
        <div className='container'>
            <div className='even-columns'>
        <div>
             <h1 className='home-text'>The easiest way to prepare for an exam</h1>
                <p>ExamBuddy makes it easy for students to study for upcoming exams. It is designed to accomodate every student needs in the aspect of studying</p>
                <button className='btn-home'>Go to quiz</button>
                </div>
                <div>
                    <img src={illustrationImage} alt="" />
                </div>
                </div>
        </div>
    );
}

export default Home;
