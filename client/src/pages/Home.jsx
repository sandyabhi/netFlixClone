import Featured from "../components/Featured";
import NavBar from "../components/NavBar";
import List from "../components/List";
import "../styles/home.scss";

export default function Home({ type }) {
  return (
    <div className="home">
      <NavBar />

      <Featured type={type} />

      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
