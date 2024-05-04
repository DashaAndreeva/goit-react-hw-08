import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const classNavLink = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css["navigation"]}>
      <NavLink className={classNavLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink className={classNavLink} to="/contacts">
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
