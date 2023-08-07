import styled from "styled-components"
import { CgGym } from "react-icons/cg"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Wrapper>
      <Link>
        <div className="logo-wrapper">
          <CgGym className="logo-icon" />
          <div className="logo-content">
            <h2 className="logo-heading">Fitness Club</h2>
            <p className="logo-text">Ultimate gym center</p>
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
  }

  .logo-icon {
    font-size: 3rem;
    color: var(--clr-primary-1);
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
