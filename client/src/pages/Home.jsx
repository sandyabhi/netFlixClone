import Featured from "../components/Featured";
import NavBar from "../components/NavBar";
import List from "../components/List";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <NavBar />

      <Featured type="movie" />

      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
