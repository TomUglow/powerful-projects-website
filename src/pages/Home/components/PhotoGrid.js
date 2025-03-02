import React from 'react';
import { Link } from 'react-router-dom';
import './PhotoGrid.css';
import ProjectsImage1 from '../../../assets/images/YDM_HiveBuilding-9.jpg';
import ProjectsImage2 from '../../../assets/images/Pitch_Tucker House_TV Room_2_2022.jpg';
import ProjectsImage4 from '../../../assets/images/BarwonEdge_19_websize.jpg';

const PhotoGrid = () => {
    return (
        <div className="grid-container">
            <figure className="grid-item grid-item--1">
                <img src={ProjectsImage1} alt="Recent Projects 1" />
            </figure>
            <figure className="grid-item grid-item--2">
                <img src={ProjectsImage2} alt="Recent Projects 2" />
            </figure>
            <div className="grid-item grid-item--text">
                <h1>Recent Projects</h1>
                <p>Every project comes with its own needs and challenges. Tell us your priorities, and we'll fill them to your satisfaction.</p>
                <Link to="/projects">
                    <button type="button" className="more-projects">
                        More Projects
                    </button>
                </Link>
            </div>
            <figure className="grid-item grid-item--3">
                <img src={ProjectsImage4} alt="Recent Projects 4" />
            </figure>
        </div>
    );
};

export default PhotoGrid;
