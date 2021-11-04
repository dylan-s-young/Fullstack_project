import "./ghost.css";
import LoginButton from "../Button/LoginButton";

export default function Ghost() {
    return (
        <div className="ghostbox">
            <div className="ghosttext">
                <span>
                    Ghost
                </span>
            </div>
            <div className="moretext">
                The ultimate tool to track your crypto.
            </div>
            <img src="https://cdn.dribbble.com/users/85756/screenshots/2540208/media/0d802bf80138447ff268c42bc7dfbff6.gif" alt="" className="ghostpicture" />
            <div>
                <LoginButton/>
            </div>
        </div>
    )
}