import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const className = "NavBar";

  //Materia UI Drop Menu code
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Flag for scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        className +
        `${
          scrolled ? " scrolled bg-light py-3" : " bg-transparent py-md-5 py-4"
        }` +
        " w-100 fixed-top xl:px-32 lg:px-14 px-8 d-flex flex-row align-items-center justify-content-between"
      }
    >
      <Link to="/" className="text-decoration-none">
        <h1 className="sm:text-2xl text-lg">DINESHGAHLOT.COM</h1>
      </Link>

      <div
        className={className + "__navButtons d-none d-lg-flex gap-4 fw-bold"}
      >
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => props.scrollHandler(props.home)}
        >
          HOME
        </Link>
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => props.scrollHandler(props.gallery)}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => props.scrollHandler(props.about)}
        >
          ABOUT
        </Link>
        <Link
          to="/"
          className="text-decoration-none"
          onClick={() => props.scrollHandler(props.testimonial)}
        >
          TESTIMONIAL
        </Link>
        <Link to="/" className="text-decoration-none">
          CONTACT
        </Link>
      </div>

      <button className={className + "__hamburger d-block d-lg-none"}>
        <CgMenuGridO
          className="fs-2"
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        />
      </button>

      {/**Using material UI for Drop Menu */}
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onMouseUp={handleClose}
          onClick={() => props.scrollHandler(props.home)}
        >
          <Link to="/" className="text-xs fw-semibold">
            HOME
          </Link>
        </MenuItem>
        <MenuItem
          onMouseUp={handleClose}
          onClick={() => props.scrollHandler(props.gallery)}
        >
          <Link to="/" className="text-xs fw-semibold">
            PORTFOLIO
          </Link>
        </MenuItem>
        <MenuItem onMouseUp={handleClose}>
          <Link
            to="/"
            className="text-xs fw-semibold"
            onClick={() => props.scrollHandler(props.about)}
          >
            ABOUT
          </Link>
        </MenuItem>
        <MenuItem
          onMouseUp={handleClose}
          onClick={() => props.scrollHandler(props.testimonial)}
        >
          <Link to="/" className="text-xs fw-semibold">
            TESTIMONIAL
          </Link>
        </MenuItem>
        <MenuItem onMouseUp={handleClose}>
          <Link to="/" className="text-xs fw-semibold">
            CONTACT
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default Nav;
