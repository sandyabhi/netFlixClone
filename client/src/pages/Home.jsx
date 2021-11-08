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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ViYTY5OWIyYmM1OTc0ZmQ0NWZkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM5MDkyOCwiZXhwIjoxNjM2ODIyOTI4fQ.NeGl4UD81YHFDOyLIdQHnht5dqzr2im6A6DOwizlQyU",
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
