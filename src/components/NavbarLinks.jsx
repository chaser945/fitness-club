import { navBarLinks } from "../utils"
import { Link } from "react-router-dom"
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
            <Link
              to={`${c.path}`}
              key={i}
              className="nav-link"
              onClick={handleClick}
            >
              {c.name}
            </Link>
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
