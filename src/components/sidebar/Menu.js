import React from "react";
import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";
import {
  BsPersonCheck,
  BsChevronDown,
  BsArrowUpRightSquare,
  BsKeyboard,
  BsPencilSquare,
} from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
const Menu = () => {
  const [showAccordions, setShowAccordions] = useState(false);
  const [showAccordions2, setShowAccordions2] = useState(false);
  const [showAccordions3, setShowAccordions3] = useState(false);

  const handleAccordion = () => {
    setShowAccordions(!showAccordions);
  };
  const handleAccordion2 = () => {
    setShowAccordions2(!showAccordions2);
  };
  const handleAccordion3 = () => {
    setShowAccordions3(!showAccordions3);
  };

  return (
    <div className="menu">
      <div className="menu-big-lists">
        <div className="menu-list">
          <i className="menu-icon">
            <BiMessageRoundedDetail />
          </i>
          <h4>Konular</h4>
        </div>
        <div className="menu-list">
          <i className="menu-icon">
            <CiViewList />
          </i>
          <h4>Listeler</h4>
        </div>
        <div className="menu-list">
          <i className="menu-icon">
            <BsPersonCheck />
          </i>
          <h4>Twitter Cevresi</h4>
        </div>
      </div>
      <div className="accordions">
        <div className="accordion">
          <div className="accordion-header">
            <p>Icerik Uretici Studyosu</p>
            <i
              className={`${
                showAccordions ? "accordion-icon active-icon" : "accordion-icon"
              }`}
              onClick={handleAccordion}
            >
              <BsChevronDown />
            </i>
          </div>
          {showAccordions && (
            <div className="accordion-body">
              <div className="accordion-list">
                <i className="accordion-icon">
                  <IoIosStats />
                </i>
                <p>Istatistikler</p>
              </div>
            </div>
          )}
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <p>Profesyonal Araclar</p>
            <i
              className={`${
                showAccordions2
                  ? "accordion-icon active-icon"
                  : "accordion-icon"
              }`}
              onClick={handleAccordion2}
            >
              <BsChevronDown />
            </i>
          </div>
          {showAccordions2 && (
            <div className="accordion-body">
              <div className="accordion-list">
                <i className="accordion-icon">
                  <TbRocket />
                </i>
                <p>Profosyoneller Icin Twitter</p>
              </div>
              <div className="accordion-list">
                <i className="acoordion-icon">
                  <BsArrowUpRightSquare />
                </i>
                <p>Twitter Reklamlari</p>
              </div>
              <div className="accordion-list">
                <i className="accordion-icon">
                  <FaRegMoneyBillAlt />
                </i>
                <p>Para Kazanma</p>
              </div>
            </div>
          )}
        </div>
        <div className="accordion">
          <div className="accordion-header">
            <p>Ayarlar ve Destek</p>
            <i
              className={`${
                showAccordions3
                  ? "accordion-icon active-icon"
                  : "accordion-icon"
              }`}
              onClick={handleAccordion3}
            >
              <BsChevronDown />
            </i>
          </div>
          {showAccordions3 && (
            <div className="accordion-body">
              <div className="accordion-list">
                <i className="accordion-icon">
                  <FiSettings />
                </i>
                <p>Ayarlar ve gizlilik</p>
              </div>
              <div className="accordion-list">
                <i className="accordion-icon">
                  <FiHelpCircle />
                </i>
                <p>Yardim Merkezi</p>
              </div>
              <div className="accordion-list">
                <i className="accordion-icon">
                  <BsPencilSquare />
                </i>
                <p>Gorunum</p>
              </div>
              <div className="accordion-list">
                <i className="accordion-icon">
                  <BsKeyboard />
                </i>
                <p>Klavye kisayollari</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
