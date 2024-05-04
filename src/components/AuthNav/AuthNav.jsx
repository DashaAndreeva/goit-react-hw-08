import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const AuthNav = () => {
  return (
    <div className={css["navigation"]}>
      <NavLink className={getNavLinkClass} to="/register">
        {" "}
        Register{" "}
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        {" "}
        log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
