import React from 'react';
import './goals.css';
import laptopImg from '../../assets/images/laptopImg.svg';


export default function Goals() {
    return (
        <header>
            <h1 className="title">Design Goals</h1>
            <hr className="divider"/>
            <div className="container">
                <div className="leftContent">
                    <p className="para">The "Academia" website app is designed to be a student-centric platform that enhances academic workflows and collaboration. It aims to be intuitive and adaptable to various learning styles, integrating AI for personalized academic tools. By featuring real-time communication and collaborative study functions, it serves as a dynamic and inclusive hub for students and educators. Success will be assessed through user feedback, task completion rates, and academic performance improvements.</p>
                </div>
                <div className="rightContent">
                    <img className='image' src={laptopImg} alt='Academia Image' />
                </div>
            </div>
        </header>
    );
}
