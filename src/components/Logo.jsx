import styled from "styled-components"
import { Link } from "react-router-dom"
import dumbbellIcon from "../assets/images/flat-icons/dumbbell_flat.png"
// import { CgGym } from "react-icons/cg"

const Logo = ({ headingColor, textColor }) => {
  return (
    <Wrapper>
      <Link>
        <div className="logo-wrapper">
          {/* <CgGym className="logo-icon" /> */}
          <img src={dumbbellIcon} alt="dumbbell icon" className="logo-icon" />
          <div className="logo-content">
            <h2 className="logo-heading" style={{ color: headingColor }}>
              Fitness Club
            </h2>
            <p className="logo-text" style={{ color: textColor }}>
              Ultimate gym center
            </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}
export default Logo

const Wrapper = styled.div`
  .logo-wrapper {
    display: flex;
    color: white;
    gap: 0.5em;
  }

  .logo-icon {
    width: 45px;
    /* font-size: 3rem;
    color: var(--clr-primary-1); */
  }

  .logo-heading,
  .logo-text {
    margin: 0;
  }

  .logo-heading {
    font-size: 1.5;
  }
  .logo-text {
    text-transform: uppercase;
    font-size: 0.6rem;
    letter-spacing: 2px;
    color: white;
  }
`
