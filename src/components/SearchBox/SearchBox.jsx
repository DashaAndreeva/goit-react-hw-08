import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css["find-container"]}>
      <p className={css["title-find"]}>Find contacts by name or number</p>
      <input
        className={css["find-input"]}
        type="text"
        placeholder="Type name or number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
