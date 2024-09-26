import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "about",
    link: "about",
  },
  {
    id: 3,
    title: "services",
    link: "service",
  },
  {
    id: 4,
    title: "contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for the drawer
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle drawer visibility
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const currentLanguage = i18n.language;

    if (currentLanguage === "ar") {
      console.log("Arabic selected");
      document.body.dir = "rtl";
    } else {
      console.log("English selected");
      document.body.dir = "ltr";
    }
  }, [i18n.language]);

  // Close drawer if screen size is below 'md' (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && drawerOpen) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex flex-row justify-between items-center"
      >
        {/* Show navigation button for small screens */}
        <div className="block md:hidden mb-4">
          <div className="text-center mt-4">
            <button
              className="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 "
              type="button"
              onClick={toggleDrawer} // Call toggleDrawer on click
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Logo section */}
        <Link to={"/"}>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-10" />
            <span className="text-2xl font-bold">DesignCom</span>
          </div>
        </Link>



        {/* Main Navigation Links for medium and larger screens */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <Link
                to={link.link}
                key={link.id}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {t(link.title)}
              </Link>
            );
          })}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-block mx-4 text-lg font-semibold focus:outline-none"
            >
              <i className="fas fa-language mx-1"></i>
              {t("language")}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t("english")}
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t("arabic")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Button section */}
        <div>
          <button className="primary-btn">{t("tryForFree")}</button>
        </div>
      </motion.div>
              {/* Drawer Navigation */}
              <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
            drawerOpen ? "translate-x-0 " : "-translate-x-full"
          } bg-white dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            type="button"
            onClick={toggleDrawer} // Close the drawer on click
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    onClick={toggleDrawer} // Close the drawer on link click
                  >
                    <span className="ms-3">{t(link.title)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
};

export default Navbar;
