import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import { MdClose } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../features/appSlice/appSlice"

const Sidebar = () => {
  const { showSidebar } = useSelector((store) => store.appSlice)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className={`sidebar ${!showSidebar && "hide"}`}>
        <MdClose className="close-icon" onClick={handleClick} />
        <NavbarLinks />
      </div>
    </Wrapper>
  )
}
export default Sidebar

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all ease-out 0.3s;
    z-index: 999;
  }

  .sidebar.hide {
    transform: translateX(-100%);
  }

  .close-icon {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 2rem;
    color: var(--clr-primary-1);
    cursor: pointer;
    /* font-weight: 700; */
    /* transition: var(--transition); */
  }

  .navbar-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }
  .nav-link {
    color: black;
    font-weight: 600;
    font-size: 1.1rem;
  }
  @media (min-width: 1176px) {
    .sidebar {
      display: none;
    }
  }
`
