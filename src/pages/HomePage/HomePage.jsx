import css from "./HomePage.module.css";
import img from "../../img/bcg.jpg";

const HomePage = () => {
  return (
    <div className={css["container"]}>
      <h1 className={css["title"]}>Welcome to the contact book!</h1>
      <img src={img} alt="" className={css["img"]} />
    </div>
  );
};

export default HomePage;
