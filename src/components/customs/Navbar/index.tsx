import logo from "../../../assets/icons/logo.svg";
import search from "../../../assets/icons/search.svg";
import bell from "../../../assets/icons/bell.svg";
import arrow from "../../../assets/icons/arrow.svg";
import avatar from "../../../assets/images/avatar.png";
import './navbar.scss'

const Navbar = () => {
  return (
    <aside>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="search-bar">
        <input placeholder="Search for anything" />
        <button>
          <img src={search} alt="search icon" />
        </button>
      </div>
      <div className="profile">
        <p>Docs</p>
        <div role="button">
          <img src={bell} alt="bell icon" />
        </div>
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="name">
          <span>Chioma</span>
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;