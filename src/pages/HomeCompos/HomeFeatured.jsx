import styled from "styled-components"
import { MarkerHeading } from "../../components"
import { exerciseClasses } from "../../utils"

import cyclingIcon from "../../assets/images/featured-icons/cycling.png"
import karateIcon from "../../assets/images/featured-icons/karate.png"
import meditationIcon from "../../assets/images/featured-icons/meditation.png"
import taekwondoIcon from "../../assets/images/featured-icons/taekwondo.png"
import treadmillIcon from "../../assets/images/featured-icons/treadmill.png"
import workoutIcon from "../../assets/images/featured-icons/workout.png"

const HomeFeatured = () => {
  const iconsList = [
    cyclingIcon,
    meditationIcon,
    karateIcon,
    taekwondoIcon,
    workoutIcon,
    treadmillIcon,
  ]
  const featuredClasses = exerciseClasses.slice(0, 6).map((c, index) => {
    return { ...c, icon: iconsList[index] }
  })
  return (
    <Wrapper>
      <div className="featured-wrapper section-wrapper">
        <MarkerHeading heading="our featured class" />
        <h1 className="featured-title">we are offering multiple classes</h1>
        <div className="featured-gallery">
          {featuredClasses.map((c, index) => {
            const { title, timing, img_url, icon } = c
            return (
              <div className="featured-card" key={index}>
                <div className="icon-wrapper">
                  <img src={icon} className="featured-icon" />
                </div>
                <div
                  className="featured-child"
                  style={{ backgroundImage: `url(${img_url})` }}
                ></div>
                <div className="card-content">
                  <h2 className="card-title">{title}</h2>
                  <p className="timings">{timing}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeFeatured

const Wrapper = styled.div`
  background-color: white;
  .featured-wrapper {
    padding: 5em 1.5em 3em 1.5em;
    text-align: center;
  }
  .featured-title {
    text-transform: capitalize;
  }
  .featured-gallery {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .featured-card {
    position: relative;
    overflow: hidden;
    height: 300px;
    color: white;
    display: flex;
    align-items: flex-end;
    /* border: 1px solid black; */
  }
  .icon-wrapper {
    position: absolute;
    z-index: 3;
    left: -60px;
    top: 30%;
    transform: translateY(-50%) rotate(45deg);
    background-color: white;
    padding: 0.2em 1em 0.2em 5em;
    border-radius: 50px;
    opacity: 0.4;
    transition: all ease-in-out 0.3s;
  }
  .featured-icon {
    width: 40px;
  }

  .featured-child {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: grayscale(90%);
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all ease-in-out 0.3s;
  }
  .featured-card:hover .featured-child {
    filter: grayscale(0);
    transform: scale(1.2);
    overflow: hidden;
  }
  .featured-card:hover .icon-wrapper {
    opacity: 1;
  }
  .card-content {
    left: 30px;
    bottom: 20px;
    position: absolute;
    color: white;
    z-index: 1;
    text-align: left;
  }
  .card-title {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .timings {
    background-color: var(--clr-primary-1);
    display: inline-block;
    color: white;
    padding: 0.2em 1em;
  }

  @media (min-width: 1036px) {
    .featured-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .featured-card:first-of-type {
      grid-column: 1/3;
    }
    .featured-card:last-of-type {
      grid-column: 3/5;
    }
  }
`
