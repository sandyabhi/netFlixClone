import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "../styles/topbar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin </span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
            alt=""
            className="topbarAvatar"
          />
        </div>
      </div>
    </div>
  );
}
