import styled from "styled-components"
import { ButtonUniq, MarkerHeading, TourCard } from "../components"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { tourCards } from "../utils"
// importing icons
import trainerIcon from "../assets/images/flat-icons/fitness.png"
import equipmentIcon from "../assets/images/flat-icons/weights.png"
import exerciseIcon from "../assets/images/flat-icons/exercise.png"
import runningIcon from "../assets/images/flat-icons/running.png"

const iconsData = [
  {
    icon: trainerIcon,
    title: "professional trainers",
  },
  {
    icon: equipmentIcon,
    title: "modern equipments",
  },
  {
    icon: exerciseIcon,
    title: "fancy gym machines",
  },
]

const Home = () => {
  return (
    <Wrapper>
      {/* page hero */}
      <section className="hero">
        <div className="hero-content">
          <MarkerHeading heading="find your energy" />
          <h1 className="hero-title">
            make your body <br />
            <span className="light-title"> fit & perfect </span>
          </h1>
          <ButtonUniq text="our classes" css_class="white" />
        </div>
        <div className="hero-social">
          <h4 className="share-text">share</h4>
          <div className="line"></div>
          <FaLinkedinIn />
          <FaTwitter />
          <FaFacebookF />
        </div>
      </section>
      {/* tour section */}
      <div className="home-content">
        <section className="tour-section section-wrapper">
          <div className="tour-card-wrapper">
            {tourCards.map((card, index) => {
              return <TourCard key={index} {...card} />
            })}
          </div>
          <div className="tour-content-wrapper">
            <div className="tour-content">
              <MarkerHeading heading="who we are" />
              <h1 className="tour-title">
                take your body and health to a new level
              </h1>
              <p className="tour-text">
                Our comprehensively designed programs will help you accomplish
                your fitness goals.
              </p>
              <div className="gym-icons-wrapper">
                {iconsData.map((c, index) => {
                  return (
                    <div className="icon-card" key={index}>
                      <img
                        src={c.icon}
                        alt="trainer icon"
                        className="gym-icon"
                      />
                      <h1 className="icon-title">{c.title}</h1>
                    </div>
                  )
                })}
              </div>
              <ButtonUniq text="take a tour" />
            </div>
            <img
              src={runningIcon}
              alt="running foot"
              className="running-icon"
            />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
  background-color: var(--clr-body);

  /* hero */
  /* ======= */
  .hero {
    height: 100vh;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1750&q=80");
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    color: white;
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

  /* TOUR */
  /* ==== */

  .tour-section {
    background-color: var(--clr-body);
    padding: 2em 2em 8em 2em;
  }
  .tour-card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3em;
    margin-top: -6em;
  }
  .tour-content {
    text-align: center;
    margin-top: 4em;
  }
  .tour-title {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .gym-icons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    margin-top: 4em;
    margin-bottom: 3em;
    /* background-color: magenta; */
  }
  .gym-icon {
    max-width: 80px;
  }
  .icon-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon-title {
    text-transform: uppercase;
    max-width: 200px;
    line-height: 1.5;
    font-weight: 700;
    margin-top: 0.4em;
    font-size: 1.2rem;
  }
  .running-icon {
    display: none;
  }

  @media (min-width: 798px) {
    .gym-icons-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* background-color: magenta; */
    }
    .icon-card {
      border-right: 2px solid var(--clr-border);
      padding-right: 2em;
      /* background-color: yellow; */
    }
    .icon-card:last-of-type {
      border-right: none;
      padding-right: 0;
    }
  }

  @media (min-width: 1013px) {
    .tour-card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .tour-content {
      text-align: left;
    }
    .gym-icons-wrapper {
      justify-content: flex-start;
    }
    .tour-content-wrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      gap: 2em;
    }
    .running-icon {
      display: block;
    }
  }
`
