import Logo from "./Logo"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import { FaRegUser } from "react-icons/fa"
import { BsListNested } from "react-icons/bs"
import { AiFillPlusSquare } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../features/appSlice/appSlice"
import { useEffect } from "react"
const Navbar = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleSidebar())
  }
  const { showNavbarTransparent } = useSelector((store) => store.appSlice)
  return (
    <Wrapper>
      <div className={`navbar ${!showNavbarTransparent && "black"}`}>
        <Logo />
        <NavbarLinks />

        {/* NAV BUTTONS TOP RIGHT */}
        <div className="nav-button-wrapper">
          <GiHamburgerMenu
            className="nav-button hamburger"
            onClick={handleClick}
          />
          <FaRegUser className="nav-button" />
          <BsListNested className="nav-button" />
          <div className="join-class-wrapper">
            <AiFillPlusSquare className="nav-button plus-button" />
            <p className="join-class-text">join class now</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar

const Wrapper = styled.div`
  .navbar {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 4;
    width: 100%;
  }

  .navbar.black {
    background-color: black;
  }

  .nav-button-wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .nav-button {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition-short);
  }

  .nav-button:hover,
  .nav-button:focus {
    color: var(--clr-primary-1);
  }

  .plus-button {
    font-size: 2rem;
    color: var(--clr-primary-1);
    /* transition: all ease-out 0.6s; */
  }

  .plus-button:hover {
    animation: spin 1s ease-out;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .join-class-wrapper {
    color: white;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    border: 2px solid var(--clr-border);
    padding: 0.2em;
    padding-right: 1em;
  }

  .join-class-text {
    text-transform: capitalize;
    margin: 0;
    font-weight: 600;
    color: white;
  }

  @media (min-width: 1176px) {
    .hamburger {
      display: none;
    }
  }

  @media (min-width: 566px) {
    .join-class-wrapper {
      display: flex;
    }
  }
`
