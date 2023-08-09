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
    height: 40vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* background-image: url("https://images.unsplash.com/photo-1604233098531-90b71b1b17a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"); */
    background-position: left center;
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
  }

  .heading {
    color: white;
    margin: 0;
    margin-bottom: 0.7em;
    text-transform: capitalize;
    padding: 0.2em;
    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border-radius: 10px 0 10px 0; */
  }
`
