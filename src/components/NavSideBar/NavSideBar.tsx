import React from 'react';
import { FilePerson, Github } from "react-bootstrap-icons";
import "./NavSideBar.scss";

export const NavSideBar = () => {
    return (
        <nav className="nav-bar">
            <a href="#about">
                <FilePerson className="nav-bar__icon" />
            </a>
            <a href="#github">
                <Github className="nav-bar__icon" />
            </a>
        </nav>
    )
}
