import styled from "styled-components"
import { ButtonUniq, MarkerHeading } from "../../components"
import bagIcon from "../../assets/images/facilities/bag-f.png"
import bikeIcon from "../../assets/images/facilities/bike-f.png"
import bottleIcon from "../../assets/images/facilities/bottle-f.png"
import fitnessIcon from "../../assets/images/facilities/fitness-f.png"
import { Link } from "react-router-dom"

const HomeChoose = () => {
  const facilitiesData = [
    {
      icon: fitnessIcon,
      title: "free fitness training",
    },
    {
      icon: bikeIcon,
      title: "modern gym equipments",
    },
    {
      icon: bagIcon,
      title: "gym bag equipments",
    },
    {
      icon: bottleIcon,
      title: "fresh bottle water",
    },
  ]
  return (
    <Wrapper>
      <div className="header-wrapper">
        <div className="header section-wrapper">
          <h1 className="header-title">
            Providing best fitness services for you
          </h1>
          <Link to="pricing">
            <ButtonUniq text="join with us" />
          </Link>
        </div>
      </div>
      <div className="choose-wrapper">
        {/* body */}
        <div className="body section-wrapper">
          <div className="body-img-wrapper">
            <div className="red-bar first"></div>
            <img
              src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2582&q=80"
              alt="man exercising"
              className="beard-img"
            />
            <div className="red-bar second"></div>
          </div>
          {/* content */}
          <div className="content">
            <MarkerHeading heading="why choose use" />
            <h1 className="content-h1">
              we can give a shape to your body here!
            </h1>
            <p className="content-p">
              At <strong>Fitness Club</strong>, we are determined to help you
              achieving your fitness goals. Our nutritionists and trainers work
              with you to form a personalized nutrition and fitness plan that
              helps you reach your determined goals.
            </p>
            <div className="facilities-wrapper">
              {facilitiesData.map((facility, index) => {
                return (
                  <div className="facility-card" key={index}>
                    <div className="f-icon-wrapper">
                      <img
                        key={index}
                        src={facility.icon}
                        className="facility-icon"
                      />
                    </div>
                    <h3 className="facility-h3">{facility.title}</h3>
                  </div>
                )
              })}
            </div>
            <Link to="classes">
              <ButtonUniq text="our classes" />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeChoose

const Wrapper = styled.div`
  .header-wrapper {
    background-image: url("https://images.unsplash.com/photo-1581095146373-cd331553812f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHJlZCUyMGd5bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60");
  }
  .header {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1em 1em 3em 1em;
  }
  .header-title {
    text-transform: capitalize;
    font-size: 1.5rem;
  }
  .choose-wrapper {
    background-color: var(--clr-black-1);
  }
  .body-img-wrapper {
    padding-top: 5em;
    width: 80%;
    margin: 0em auto 0em;
    transform: rotate(-10deg);
    display: flex;
    gap: 1em;
  }

  .beard-img {
    border: 7px solid white;
  }

  .red-bar {
    height: 100px;
    width: 7px;
    background-color: var(--clr-primary-1);
  }
  .red-bar.second {
    margin-top: 5em;
  }

  .beard-img {
    align-self: center;
  }

  .content {
    color: white;
    text-align: center;
    padding: 4em 2em 6em 2em;
  }
  .content-h1 {
    text-transform: capitalize;
    line-height: 1.5;
  }
  .content-p {
    color: white;
    margin-bottom: 2em;
  }
  .facilities-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 4em;
    justify-content: center;
    align-items: center;
  }
  .facility-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
    max-width: 250px;
  }
  .f-icon-wrapper {
    border-radius: 50%;
    background-color: var(--clr-border-1);
    padding: 1em;
    transition: all linear 0.3s;
    align-self: center;
  }
  .facility-icon {
    width: 30px;
  }
  .facility-h3 {
    text-transform: capitalize;
    color: white;
  }

  @media (min-width: 548px) {
    .facilities-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 600px;
      margin: 0 auto;
      padding-bottom: 3em;
      padding-top: 2em;
    }
  }
  @media (min-width: 1000px) {
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 4em 2em;
    }
    .header-title {
      font-size: 2rem;
    }
    .body {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .content {
      text-align: left;
    }
    .facilities-wrapper {
      margin: 0;
    }
  }
`
