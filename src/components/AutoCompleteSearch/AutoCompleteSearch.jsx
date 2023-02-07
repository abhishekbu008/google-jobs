import { useState } from "react";
import { arrayToStr } from "../../helpers/helpers";
import useAutoSearch from "../../hooks/useAutoSearch";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";

function AutoCompleteSearch({
  iconLeft = null,
  autoSearch = false,
  value,
  onChange,
  placeholder,
  btnLabel,
  onSearch = () => {},
  className = "",
  style = {},
  searchHandler = () => {},
  item = () => null,
  debounce = 300,
  disabled = false,
}) {
  const classNames = arrayToStr(["shadow-default", className]);

  const styles = {
    ...style,
  };
  const isControlled = typeof value !== undefined;

  const [inputVal, setInputVal] = useState("");
  const { suggestions } = useAutoSearch(
    isControlled ? value : inputVal,
    searchHandler,
    autoSearch,
    debounce
  );

  const handleChange = (e) => {
    if (isControlled) {
      onChange(e.target.value);
      return;
    }

    setInputVal(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <article className={classNames}>
      <form
        className="bg-white p-1 border rounded w-full flex items-center"
        style={styles}
      >
        <Input
          placeholder={placeholder}
          className="w-full h-full shadow-none"
          iconLeft={iconLeft}
          value={isControlled ? value : inputVal}
          onChange={handleChange}
        />
        {!autoSearch && (
          <Button
            className="w-auto"
            size={"lg"}
            onClick={handleSearch}
            disabled={disabled}
          >
            {btnLabel}
          </Button>
        )}
      </form>
      {suggestions instanceof Array && (
        <div>{suggestions.map((searchItem) => item(searchItem))}</div>
      )}
    </article>
  );
}

export default AutoCompleteSearch;
