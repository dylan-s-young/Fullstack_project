import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <LineStyleIcon />
                            Home
                        </li>
                        <li className="sidebarlistitem">
                            <AnalyticsIcon />
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TimelineIcon />
                            Timeline
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
