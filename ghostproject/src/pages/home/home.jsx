import "./home.css";
import Ghost from "../../components/ghost/Ghost";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <div className="homepage">
            <Ghost/>
            <Helmet>
                <style>{'body {background-color: #9582FF; }'}</style>
            </Helmet>
        </div>
    )
}