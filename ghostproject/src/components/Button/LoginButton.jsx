import InteractiveLaptop from "../laptop/InteractiveLaptop";
import "./loginButton.css";

export default function LoginButton() {
    return (
        <div className="btncontainer">
            <button className="loginbtn">
                Login
            </button>
            <button className="registerbtn">
                Register
            </button>
            <InteractiveLaptop/>
        </div>
    )
}

