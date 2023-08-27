import { useState, useEffect } from "react"
import styled from "styled-components"
import bannerBig from "../assets/images/gym-banner.jpg"
// import bannerTiny from "../assets/images/gym_banner_tiny.jpg"

const PageHero = ({ heading }) => {
  const [customClass, setCustomClass] = useState("blur")
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCustomClass("focus")
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <Wrapper>
      <div
        className={`hero ${customClass}`}
        style={{ backgroundImage: `url(${bannerBig})` }}
      >
        <h1 className="heading">{heading}</h1>
      </div>
    </Wrapper>
  )
}
export default PageHero

const Wrapper = styled.div`
  .hero {
    height: 35vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-position: center center;
    background-size: cover;
    transition: all linear 0.2s;
  }
  .hero.blur {
    filter: blur(20px);
  }
  .hero.focus {
    filter: blur(0);
  }

  .heading {
    color: white;
    margin: 0;
    margin-bottom: 0.7em;
    text-transform: capitalize;
    padding: 0.2em;
  }
`
