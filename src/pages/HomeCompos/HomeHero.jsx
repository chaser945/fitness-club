import styled from "styled-components"
import { MarkerHeading, ButtonUniq } from "../../components"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import boxingTinyImg from "../../assets/images/hero_box_tiny.jpg"

const HomeHero = () => {
  const [bgUrl, setBgUrl] = useState(boxingTinyImg)
  useEffect(() => {
    const img = new Image()
    img.src =
      "https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80"
    img.onload = () => {
      setBgUrl(img.src)
    }
  }, [])
  return (
    <Wrapper>
      <section
        className={`hero ${bgUrl === boxingTinyImg ? "blur" : "focus"}`}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="hero-content">
          <MarkerHeading heading="find your energy" />
          <h1 className="hero-title">
            make your body <br />
            <span className="light-title"> fit & perfect </span>
          </h1>
          <Link to="classes">
            <ButtonUniq text="our classes" css_class="white" />
          </Link>
        </div>
        <div className="hero-social">
          <h4 className="share-text">share</h4>
          <div className="line"></div>
          <FaLinkedinIn />
          <FaTwitter />
          <FaFacebookF />
        </div>
      </section>
    </Wrapper>
  )
}
export default HomeHero

const Wrapper = styled.div`
  .hero {
    height: 100vh;
    background-size: cover;
    /* background-image: url("https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80"); */
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    color: white;
    transition: all linear 0.2s;
  }
  .hero.blur {
    filter: blur(20px);
  }
  .hero.focus {
    filter: blur(0);
  }
  .hero-content {
    text-align: center;
  }
  .hero-title {
    color: white;
    font-size: 2.2rem;
    text-transform: uppercase;
    line-height: 1.7;
  }
  .light-title {
    font-weight: 400;
  }

  @media (min-width: 1150px) {
    .hero {
      justify-content: flex-end;
      padding: 6em;
    }
    .hero-content {
      text-align: left;
    }
  }

  /* hero social */
  .hero-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7em;
    display: none;
  }
  .share-text {
    writing-mode: vertical-lr;
    text-transform: uppercase;
  }
  .line {
    height: 30px;
    width: 3px;
    background-color: var(--clr-primary-1);
  }

  @media (min-width: 1150px) {
    .hero {
      gap: 2em;
    }
    .hero-social {
      display: flex;
    }
  }
`
