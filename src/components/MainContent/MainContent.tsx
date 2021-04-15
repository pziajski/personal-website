import "./MainContent.scss";
import { StarFall } from '../../components/StarFall/StarFall';
import { Github, Linkedin } from "react-bootstrap-icons";

export const MainContent = () => {
    return (
        <div className="main-content">
            <div className="section-container">
                <StarFall />
                <h2 className="section-title">Software Developer with an interest in softare, hardware, space, and physics.</h2>
            </div>
            <div className="section-container">
                <ul className="link-list">
                    <li>
                        <a href="https://github.com/pziajski">
                            <Github className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/patrick-ziajski/">
                            <Linkedin className="icon" />
                        </a>
                    </li>
                </ul>
                <p>{"[ made by patrick for patrick ]"}</p>
            </div>
        </div>
    )
}