import styled from "styled-components"
import { MarkerHeading } from "../../components"
import { PiQuotesBold } from "react-icons/pi"
import treadmill from "../../assets/images/flat-icons/treadmill.png"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
// gym partners logo imports
import athleticClub from "../../assets/images/gym-partners/athletic-club.png"
import fitnessClub from "../../assets/images/gym-partners/fitness-club.png"
import gymClub from "../../assets/images/gym-partners/gym-club.png"
import muscleClub from "../../assets/images/gym-partners/muscle.png"
import powerlifting from "../../assets/images/gym-partners/power-lifting.png"

const HomeTestimonials = () => {
  const gymPartnersData = [
    athleticClub,
    fitnessClub,
    gymClub,
    muscleClub,
    powerlifting,
  ]
  return (
    <Wrapper>
      <div className="testimonials-wrapper section-wrapper">
        <MarkerHeading heading="testimonials" />
        <div className="comment-border">
          <div className="comment-wrapper">
            <img
              className="testimonial-img"
              alt="gym-girl"
              src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="comment-container">
              <PiQuotesBold className="quote" />
              <p className="comment">
                "Joining Fitness Club was a game-changer for me! The trainers
                are top-notch, the atmosphere is motivating, and the results
                speak for themselves. I'm stronger, fitter, and happier – all
                thanks to this amazing gym."
              </p>
              <div className="writer-wrapper">
                <h2 className="writer-name">Julie Smith</h2>
                <p className="writer-position">CEO of Hogwarts</p>
              </div>
              <img src={treadmill} className="bg-treadmill" />
              {/* navigation buttons */}
              <div className="nav-btn-wrapper">
                <button className="nav-btn">
                  <FaArrowLeft className="nav-icon" />
                </button>
                <button className="nav-btn">
                  <FaArrowRight className="nav-icon" />
                </button>
              </div>
            </div>{" "}
            {/*comment container ends here */}
          </div>
        </div>
        {/* gym partners */}
        <div className="gym-partners-wrapper">
          {gymPartnersData.map((partner, index) => {
            return (
              <img
                src={partner}
                alt="logo"
                key={index}
                className="partner-logo"
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeTestimonials

const Wrapper = styled.div`
  padding: 5em 1.5em 3em 1.5em;
  .testimonials-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  .comment-border {
    border: 10px solid var(--clr-border-1);
    padding: 1em 1em;
  }
  .comment-wrapper {
    background-color: black;
    color: white;
    position: relative;
    /* width: 1200px; */
    /* background-color: magenta; */
  }
  .testimonial-img {
    display: none;
  }
  .comment-container {
    padding: 1em 1em 2em 1em;
    position: relative;
    /* max-width: 600px; */
  }
  .quote {
    font-size: 3rem;
    opacity: 0.7;
  }
  .comment {
    color: white;
  }
  .writer-wrapper {
    position: relative;
    z-index: 1;
  }
  .writer-name {
    margin-bottom: 0;
    font-size: 1.2rem;
    /* background-color: magenta; */
  }
  .writer-position {
    color: white;
    margin-top: 0.5em;
    font-size: 0.7rem;
  }
  .bg-treadmill {
    position: absolute;
    width: 120px;
    left: 40%;
    bottom: 10px;
    z-index: 0;
    opacity: 0.5;
  }
  .nav-btn-wrapper {
    display: flex;
    gap: 1em;
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 7;
  }
  .nav-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    cursor: pointer;
    transition: all linear 0.2s;
    width: 40px;
    height: 40px;
  }
  .nav-icon {
    transition: all linear 0.2s;
  }
  .nav-btn:hover {
    background-color: var(--clr-primary-1);
  }
  .nav-btn:hover .nav-icon {
    color: white;
  }
  .gym-partners-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
  }
  .partner-logo {
    width: 150px;
  }

  @media (min-width: 795px) {
    .testimonials-wrapper {
      gap: 4em;
    }
    .comment-border {
      width: 100%;
    }
    .comment-wrapper {
      width: 100%;
    }
    .comment-container {
      width: 50%;
      margin-left: 330px;
    }
    .testimonial-img {
      display: block;
      width: 280px;
      bottom: 0;
      position: absolute;
      border-radius: 0 200px 0 0;
    }
    .bg-treadmill {
      display: none;
    }
  }
`
