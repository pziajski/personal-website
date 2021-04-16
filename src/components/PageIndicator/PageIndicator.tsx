import { CircleFill } from "react-bootstrap-icons";
import "./PageIndicator.scss";

export const PageIndicator = () => {
    return (
        <div className="page-indicator">
            <CircleFill className="page-indicator__indicator" />
            <CircleFill className="page-indicator__indicator" />
        </div>
    )
}
