import styled from "styled-components"
import { MarkerHeading } from "../../components"
import coach1 from "../../assets/images/coach1.png"
import coach2 from "../../assets/images/coach2.png"
import coach3 from "../../assets/images/coach3.png"
import redBg from "../../assets/images/Red-marker-bg.png"
import dumbbellLogo from "../../assets/images/flat-icons/dumbbell_logo.png"
// importing social icons
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { CiMail } from "react-icons/ci"

const HomeTrainers = () => {
  const trainerData = [
    {
      name: "william smith",
      position: "boxing trainer",
      img: coach1,
    },
    {
      name: "john schmoe",
      position: "crossfit trainer",
      img: coach2,
    },
    {
      name: "ana moon",
      position: "yoga trainer",
      img: coach3,
    },
  ]
  return (
    <Wrapper>
      <img src={dumbbellLogo} className="bg-img" />
      <div className="trainers-wrapper section-wrapper">
        <MarkerHeading heading="gym trainers" />
        <h1 className="trainer-title">team of expert coaches</h1>
        <p className="trainer-text">
          Our expert coaches and trainers can help you accomplish any realistic
          goal set by you.
        </p>
        <div className="trainer-card-wrapper">
          {trainerData.map((trainer, index) => {
            const { name, position, img } = trainer
            return (
              <div className="trainer-card" key={index}>
                <div
                  className="img-wrapper"
                  style={{ backgroundImage: `url(${redBg})` }}
                >
                  <img src={img} className="trainer-img" />
                </div>
                {/* card content */}
                <div className="card-content">
                  <h2 className="name">{name}</h2>
                  <p className="position">{position}</p>
                  <div className="social-icons-wrapper">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <CiMail />
                  </div>
                </div>
                <div className="red-underline"></div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeTrainers

const Wrapper = styled.div`
  position: relative;
  .trainers-wrapper {
    text-align: center;
    padding: 5em 1.5em 3em 1.5em;
  }
  .trainer-title {
    text-transform: capitalize;
  }
  .trainer-card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    margin-top: 4em;
  }
  .trainer-card {
    box-shadow: var(--box-shadow);
    cursor: pointer;
  }
  .trainer-img {
    height: 270px;
    width: 250px;
    object-fit: cover;
    object-position: top;
    margin: 0 auto;
    filter: grayscale(80%);
    transition: all linear 0.3s;
  }
  .card-content {
    background-color: white;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name,
  .position {
    text-transform: capitalize;
  }
  .name {
    margin-bottom: 0;
    margin-top: 0.5em;
  }
  .position {
    margin-top: 0.3em;
  }
  .social-icons-wrapper {
    display: flex;
    gap: 1.5em;
  }
  .red-underline {
    height: 5px;
    width: 45px;
    background-color: var(--clr-primary-1);
    margin: 0 auto;
    transition: all linear 0.3s;
  }
  .trainer-card:hover .trainer-img {
    filter: grayscale(0);
  }
  .trainer-card:hover .red-underline {
    width: 100%;
  }
  .bg-img {
    position: absolute;
    opacity: 0.1;
    right: 0;
    top: 0;
    width: 300px;
  }
  @media (min-width: 692px) {
    .trainer-card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1096px) {
    .trainer-card-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
