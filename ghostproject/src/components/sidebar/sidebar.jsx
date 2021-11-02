import "./sidebar.css"
import Icon from "react-crypto-icons";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <LineStyleIcon className="sidebaricon"/>
                            Home
                        </li>
                        <li className="sidebarlistitem">
                            <GitHubIcon className="sidebaricon"/>
                            Github
                        </li>
                        <li className="sidebarlistitem">
                            <StorageIcon className="sidebaricon"/>
                            Database
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Crypto</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <Icon name="btc" size={25} className="sidebaricon"/>
                            Bitcoin
                        </li>
                        <li className="sidebarlistitem">
                            <Icon name="eth" size={25} className="sidebaricon"/>
                            Ethereum
                        </li>
                        <li className="sidebarlistitem">
                            <Icon name="ada" size={25} className="sidebaricon"/>
                            Cardano
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Analytics</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <AutoGraphIcon className="sidebaricon"/>
                            Graph
                        </li>
                        <li className="sidebarlistitem">
                            <AnalyticsIcon className="sidebaricon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TimelineIcon className="sidebaricon"/>
                            Timeline
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
