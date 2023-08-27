import { navBarLinks } from "../utils"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../features/appSlice/appSlice"

const NavbarLinks = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeSidebar())
  }
  return (
    <Wrapper>
      <div className="navbar-links">
        {navBarLinks.map((c, i) => {
          return (
            <NavLink
              to={`${c.path}`}
              key={i}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={handleClick}
            >
              {c.name}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default NavbarLinks

const Wrapper = styled.div`
  .navbar-links {
    display: none;
    gap: 1em;
    text-transform: capitalize;
  }
  .nav-link {
    text-decoration: none;
    color: white;
    transition: var(--transition-short);
    font-weight: 500;
    letter-spacing: 0.3px;
  }
  .nav-link.active {
    color: var(--clr-primary-1);
    /* font-weight: 600; */
  }
  .nav-link:hover,
  .nav-link:focus {
    color: var(--clr-primary-1);
  }

  @media (min-width: 1176px) {
    .navbar-links {
      display: flex;
    }
  }
`
