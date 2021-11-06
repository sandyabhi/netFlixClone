import { useState, useEffect } from "react";
import Featured from "../components/Featured";
import NavBar from "../components/NavBar";
import List from "../components/List";
import "../styles/home.scss";
import axios from "axios";

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setgenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""} ${
            genre ? "&genre" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ViYTY5OWIyYmM1OTc0ZmQ0NWZkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjE5NjQ4OCwiZXhwIjoxNjM2NjI4NDg4fQ.epV9_VGjOoIRzy9PMS2G6V9A0ljc9xktUuU0WU5CURY",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />

      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
