import { useState } from "react";
import Link from "next/link";
import styles from "./mobmenu.module.css";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="mobile-menu-container">
      <div className="menu-icon" onClick={handleMenuClick}>
        {/* You can use an icon library or your custom icon here */}
        <span>☰</span>
      </div>
      {isMenuOpen && (
        <div className="menu-items">
          <Link href={"/"} className={styles.link}>
            Home
          </Link>
          <Link href={"/about"} className={styles.link}>
            About
          </Link>
          <Link href={"/blog"} className={styles.link}>
            Blog
          </Link>
          <Link href={"/contact"} className={styles.link}>
            Contact
          </Link>
          <Link href={"/dashboard"} className={styles.link}>
            Dashboard
          </Link>
          <Link href={"/portfolio"} className={styles.link}>
            Portfolio
          </Link>
        </div>
      )}
      <style jsx>{`
        .mobile-menu-container {
          display: none; /* Hidden by default, will be shown on mobile */
          position: absolute;
          margin-right: 100px;
          top: 60px;
        }

        .menu-icon {
          cursor: pointer;
          font-size: 30px;
        }

        @media (max-width: 768px) {
          /* Show the menu container only on mobile devices */
          .mobile-menu-container {
            display: block;
            margin-right: 50px;
          }

          /* Add styles for the menu items */
          .menu-items {
            display: flex;
            flex-direction: column;
            background-color: red;
            padding: 10px;
            margin-top: 10px;
            color: white;
          }

          .menu-items a {
            display: block;
            padding: 8px;
            text-decoration: none;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenu;
