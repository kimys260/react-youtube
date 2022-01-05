import Styles from "css/navbar.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const inputRef = React.createRef();

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    props.onSchData(inputRef.current.value);
    navigate("/search");
  };
  const goHome = () => {
    inputRef.current.value = "";
    navigate("/");
  };

  return (
    <header className={Styles}>
      <nav className={Styles}>
        <div className={Styles.logo} onClick={goHome}>
          <img src="images/logo.PNG" alt="youtube-logo" />
        </div>
        <div className={Styles["search-box"]}>
          <form onSubmit={onSubmit}>
            <input ref={inputRef} placeholder="검색"></input>
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className={Styles.menu}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
