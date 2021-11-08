import { useState, useEffect, useMemo } from "react";
import { Visibility } from "@material-ui/icons";
import "../styles/widgetsm.css";
import axios from "axios";

const nopic = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = () => {
      try {
        const res = axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ViYTY5OWIyYmM1OTc0ZmQ0NWZkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM5MDkyOCwiZXhwIjoxNjM2ODIyOTI4fQ.NeGl4UD81YHFDOyLIdQHnht5dqzr2im6A6DOwizlQyU",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="wigetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
          <li className="widgetSmListItem">
            <img
              src={user.img} alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">June</span>
              <span className="widgetSmUserTitle">SDE</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
