import "./Home.scss";
import { StarFall } from '../../components/StarFall/StarFall';
import { Github, Linkedin } from "react-bootstrap-icons";

export const Home = () => {
    return (
        <div className="main-content">
            <div className="main-content__landing">
                <StarFall />
                <h2 className="main-content__landing-title">Software Developer with an interest in software, hardware, space, and physics.</h2>
            </div>
            <div className="main-content__info">
                <ul className="main-content__info-list">
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