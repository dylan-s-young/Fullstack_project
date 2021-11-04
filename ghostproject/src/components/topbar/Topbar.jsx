import "./topbar.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">Ghost</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                        <NotificationsNoneIcon />
                        <span className="topiconbadge">2</span>
                    </div>
                    <div className="topbariconcontainer">
                        <GitHubIcon />
                    </div>
                    <div className="topbariconcontainer">
                        <SettingsIcon />
                    </div>
                    <img src="https://cdn.dribbble.com/users/2742304/screenshots/14251222/cute_ghost_animation.gif" alt="" className="topavatar" />
                </div>
            </div>
        </div>
    )
}
