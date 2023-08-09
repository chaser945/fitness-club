import styled from "styled-components"
import { gymClasses } from "../utils"
import Logo from "./Logo"
import SocialIcons from "./SocialIcons"
import UnderlinedHeading from "./UnderlinedHeading"
import { GrCode } from "react-icons/gr"
const Footer = () => {
  const year = new Date().getFullYear()
  // console.log(year)
  return (
    <Wrapper>
      <div className="footer-wrapper section-wrapper">
        {/* POLICY SECTION START */}
        <div className="policy-wrapper">
          <Logo headingColor="black" textColor="var(--clr-font)" />
          <p className="policy-text">
            Whether you're a seasoned athlete or just starting your fitness
            voyage, join us to unlock your full potential and redefine your
            limits. Embrace the challenge, embrace the change, and embrace the
            power of our gym.
          </p>
          <SocialIcons />
          <p className="disclaimer">Privacy Policy | © {year} Fitness Club</p>
        </div>
        <div className="classes-wrapper">
          <UnderlinedHeading heading="our classes" />
          <ul className="gym-class-wrapper">
            {gymClasses.map((c, index) => {
              return (
                <li key={index} className="gym-class">
                  {c.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="hours-wrapper">
          <UnderlinedHeading heading="working hours" />
          <h3 className="day">Monday - Friday:</h3>
          <p className="time">7:00am - 21:00pm</p>
          <h3 className="day">Saturday:</h3>
          <p className="time">7:00am - 19:00pm</p>
          <h3 className="day">Sunday - Closed</h3>
        </div>
      </div>
      <p className="sign">
        <GrCode className="code-sign" /> coded by Junaid.
      </p>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.div`
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5em 2em;
  }

  .policy-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .policy-text {
    max-width: 450px;
  }

  /* .policy-wrapper {
    background-color: magenta;
  }

  .classes-wrapper {
    background-color: magenta;
  }

  .hours-wrapper {
    background-color: magenta;
  } */

  .gym-class-wrapper {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-transform: capitalize;
  }
  .day {
    color: var(--clr-font);
  }

  .sign {
    font-size: 0.7rem;
    text-align: center;
  }

  .code-sign {
    color: var(--clr-font);
  }

  @media (min-width: 957px) {
    .footer-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      align-items: start;
      gap: 2em;
    }

    .policy-wrapper {
      align-items: start;
    }
    .policy-text {
      text-align: left;
    }
  }
`
