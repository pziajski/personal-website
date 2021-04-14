import React from 'react';
import { StarFall } from '../../components/StarFall/StarFall';
import "./HomePage.scss";

export const HomePage = () => {
    return (
        <div className="home-page">
            <div id="about" className="section-container">
                <StarFall />
                <h2 className="section-title">Software Developer with an interest in softare, hardware, space, and physics.</h2>
            </div>
            <div id="github" className="section-container">
                <a href="https://github.com/pziajski">Github</a>
            </div>
            <div id="linkedin" className="section-container">
                <a href="https://www.linkedin.com/in/patrick-ziajski">LinkedIn</a>
            </div>
        </div>
    )
}
