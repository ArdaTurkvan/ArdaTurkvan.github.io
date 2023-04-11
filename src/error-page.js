import { useRouteError } from "react-router-dom";
import BodyBubble from "./components/BodyBubble";
import WavyText from "./components/WavyText";
import './style/error.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
    <div className="scrolling-background page-container">
            <div className="section section-error">
                <div className="content-container">
                    <div className="section-header-wrap">
                        <div className="section-header error-header"><h2><WavyText text="Woah, there!" delay={2}/></h2></div>
                    </div>
                    <BodyBubble child={
                        <div className="error-description">
                            <p>Looks like you got lost!</p>
                            <p>Maybe try looking somewhere else?</p>
                            <i className="important">Error: {error.statusText || error.message}</i>
                        </div>
                    } />
                </div>
            </div>
    </div>
    )
}
