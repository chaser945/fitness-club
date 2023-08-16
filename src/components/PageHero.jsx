import styled from "styled-components"
import banner from "../assets/images/gym-banner.jpg"

const PageHero = ({ heading }) => {
  return (
    <Wrapper>
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
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
  }

  .heading {
    color: white;
    margin: 0;
    margin-bottom: 0.7em;
    text-transform: capitalize;
    padding: 0.2em;
  }
`
