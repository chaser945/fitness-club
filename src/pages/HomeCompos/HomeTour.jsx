import styled from "styled-components"
import { TourCard, MarkerHeading, ButtonUniq } from "../../components"
import { tourCards } from "../../utils"
import trainerIcon from "../../assets/images/flat-icons/fitness.png"
import equipmentIcon from "../../assets/images/flat-icons/weights.png"
import exerciseIcon from "../../assets/images/flat-icons/exercise.png"
import runningIcon from "../../assets/images/flat-icons/running.png"
import { Link } from "react-router-dom"
const HomeTour = () => {
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
  return (
    <Wrapper>
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
                    <img src={c.icon} alt="trainer icon" className="gym-icon" />
                    <h1 className="icon-title">{c.title}</h1>
                  </div>
                )
              })}
            </div>
            <Link to="about">
              <ButtonUniq text="take a tour" />
            </Link>
          </div>
          <img src={runningIcon} alt="running foot" className="running-icon" />
        </div>
      </section>
    </Wrapper>
  )
}
export default HomeTour

const Wrapper = styled.div`
  background-color: var(--clr-body);
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
