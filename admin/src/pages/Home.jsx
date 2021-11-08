import { useState, useEffect, useMemo } from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import "../styles/home.css";
import { userData } from "../dummydata";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ViYTY5OWIyYmM1OTc0ZmQ0NWZkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM5MDkyOCwiZXhwIjoxNjM2ODIyOTI4fQ.NeGl4UD81YHFDOyLIdQHnht5dqzr2im6A6DOwizlQyU",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
