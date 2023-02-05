import React from "react";
import "./sidebar.css";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import { RiHome7Fill, RiNotificationLine } from "react-icons/ri";
import { BiHash, BiGroup, BiEnvelope } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";

const Sidebar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showUserInfos, setShowUserInfos] = React.useState(false);
  // set showMenu to false when the user clicks outside of the menu
  React.useEffect(() => {
    const hideMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", hideMenu);
    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);
  React.useEffect(() => {
    const hideUserMenu = () => {
      setShowUserInfos(false);
    };
    document.addEventListener("click", hideUserMenu);
    return () => {
      document.removeEventListener("click", hideUserMenu);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(true);
  };
  const handleUserMenu = (e) => {
    e.stopPropagation();
    setShowUserInfos(!showUserInfos);
  };
  return (
    <>
      <div className="headerLogo">
        <FaTwitter />
      </div>
      <div className="sidebar-items">
        {items.map((item, index) => (
          <div className="sidebar-item" key={index}>
            <div className="sidebar-icon">{item.icon}</div>
            <div className="sidebar-text">{item.text}</div>
          </div>
        ))}
        <div className="sidebar-item" onClick={handleMenuClick}>
          <div className="sidebar-icon">
            <CiCircleMore />
          </div>
          <div className="sidebar-text">Daha Fazla</div>
          {/* <div className={`${showMenu ? "drop-menu show" : "drop-menu"}`}>
            <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
          </div> */}
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>
        <button className="btn sidebar-btn">Tweetle</button>
        <div className="user-infos sidebar-user" onClick={handleUserMenu}>
          <div className="image-name">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="userimage"
              className="img"
            />
            <div className="user-name">
              <p className="name">User</p>
              <p className="username">@username</p>
            </div>
          </div>
          <div className="sidebar-more">
            <IoIosMore />
          </div>
          {showUserInfos && <UserMenu />}
        </div>
      </div>
    </>
  );
};
const items = [
  {
    icon: <RiHome7Fill />,
    text: "Anasayfa",
  },
  {
    icon: <BiHash />,
    text: "Keşfet",
  },
  {
    icon: <BiGroup />,
    text: "Topluluklar",
  },
  {
    icon: <RiNotificationLine />,
    text: "Bildirimler",
  },
  {
    icon: <BiEnvelope />,
    text: "Mesajlar",
  },
  {
    icon: <FiBookmark />,
    text: "Yer İşaretleri",
  },
  {
    icon: <MdOutlinePerson />,
    text: "Profil",
  },
];

export default Sidebar;
