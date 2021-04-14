import React from 'react';
import { FilePerson, Github, Linkedin } from "react-bootstrap-icons";
import "./NavSideBar.scss";

export const NavSideBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__sections">
                <a href="#about">
                    <FilePerson className="nav-bar__icon" />
                </a>
                <a href="#github">
                    <Github className="nav-bar__icon" />
                </a>
                <a href="#linkedin">
                    <Linkedin className="nav-bar__icon" />
                </a>
            </div>
        </nav>
    )
}
