import { useState, useEffect } from "react"
import styled from "styled-components"
import bannerBig from "../assets/images/gym-banner.jpg"
import bannerTiny from "../assets/images/gym_banner_tiny.jpg"

const PageHero = ({ heading }) => {
  const [bannerUrl, setBannerUrl] = useState(bannerBig)
  // useEffect(() => {
  //   const img = new Image()
  //   img.src = bannerBig
  //   img.onload = () => {
  //     setBannerUrl(bannerBig)
  //   }
  //   console.log(img)
  // }, [])
  return (
    <Wrapper>
      <div
        className={`hero ${bannerUrl === bannerTiny ? "blur" : "focus"}`}
        style={{ backgroundImage: `url(${bannerUrl})` }}
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
    filter: blur(50px);
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
