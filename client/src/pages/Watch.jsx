import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "../styles/watch.scss";

export default function Watch() {
  const location = useLocation();
  console.log(location);

  const movie = location.movie;
  // const trailer =
  //   "https://player.vimeo.com/external/581615058.sd.mp4?s=39380d889fc99c4b2f2ca6fb622fc497b266592c&profile_id=165&oauth2_token_id=57447761";

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.trailer} />
    </div>
  );
}
