import { Link } from "react-router-dom";
import img from "../../img/not-found.jpg";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css["container"]}>
      <p className={css["title"]}>Not Found</p>
      <img src={img} alt="" className={css["img-not"]} />
      <Link to="/" className={css["btn"]}>
        Go back
      </Link>
    </div>
  );
};

export default NotFoundPage;
