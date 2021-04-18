import "./Home.scss";
import { StarFall } from '../../components/StarFall/StarFall';
import { Github, Linkedin } from "react-bootstrap-icons";

export const Home = () => {
    return (
        <div className="main-content">
            <div className="main-content__landing">
                <StarFall />
                <h2 className="main-content__title">Software Developer with an interest in software, hardware, space, and physics.</h2>
                <h3 className="main-content__sub-title">Full-Stack focus</h3>
            </div>
            <div className="main-content__info">
                <div className="main-content__info-container">
                    <h2 className="main-content__info-title">{"[ Project Showcase coming soon ... ]"}</h2>
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
                </div>
                <p>{"[ made by patrick for patrick ]"}</p>
            </div>
        </div>
    )
}