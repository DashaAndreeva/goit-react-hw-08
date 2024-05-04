import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the contact book!</h1>
      <p className={css.homeText}>
        The app provides you with a convenient way to store, organize, and
        quickly find your contacts. <br />
        Let the contact app be your reliable assistant in managing your
        contacts!
      </p>
    </div>
  );
};

export default HomePage;