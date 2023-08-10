import styled from "styled-components"
import { ButtonUniq, HistoryCard, PageHero } from "../components"
import markerImg from "../assets/images/red-marker.svg"
import { MdManageHistory } from "react-icons/md"
import { GiAchievement } from "react-icons/gi"

const About = () => {
  return (
    <Wrapper>
      <section className="about-wrapper">
        <PageHero heading="about us" />
        {/* ABOUT US SECTION  START*/}
        <div className="about-flex section-wrapper">
          <div className="about-us">
            <div
              className="about-us-background"
              style={{
                backgroundImage: `url(${markerImg})`,
                backgroundPosition: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "210px",
                // backgroundColor: "black",
                minHeight: "40px",
              }}
            >
              <h2 className="about-us-h2">who we are</h2>
            </div>
            <h1 className="about-us-h1">
              We Will Give You Strength and Health{" "}
            </h1>
            <p className="about-us-text">
              Welcome to our premier fitness haven, where dedication meets
              transformation. Our state-of-the-art gym is a sanctuary for those
              seeking to sculpt their bodies, boost their energy, and elevate
              their wellness journey. With expert trainers guiding your every
              move, cutting-edge equipment at your disposal, and a vibrant
              community fostering motivation, we are more than just a gym –
              we're your partner in achieving greatness.
            </p>
            <ButtonUniq text="contact us" />
          </div>
          <div className="about-us-images">
            <img
              className="gym-girl"
              alt="gym girl"
              src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
            />
          </div>
        </div>
        {/* ABOUT US SECTION END */}

        {/* HISTORY SECTION START*/}
        <div className="history-wrapper section-wrapper">
          <HistoryCard
            icon={<MdManageHistory className="history-icon" />}
            heading="our history"
          />
          <img
            src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="gym"
            className="history-img"
          />
          <img
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
            alt="girls exercising"
            className="history-img"
          />
          <HistoryCard
            icon={<GiAchievement className="history-icon" />}
            heading="our history"
          />
        </div>

        {/* HISTORY SECTION END */}
      </section>
    </Wrapper>
  )
}
export default About

const Wrapper = styled.div`
  background-color: var(--clr-body);

  .about-flex {
    padding: 5em 2em;
  }

  .about-us-images {
    display: none;
  }

  .about-us {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .about-us-h2 {
    margin: 0;
    color: white;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  .about-us-h1 {
    font-size: 1.8rem;
    line-height: 1.6;
    margin-bottom: 0.6em;
  }

  .about-us-text {
    margin-top: 0;
  }

  .gym-girl {
    border-radius: 40px 7px 40px 7px;
    min-height: 300px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
  }

  .history-wrapper {
    padding: 1.5em 1.5em 3em 1.5em;
  }

  .history-icon {
    font-size: 5rem;
    color: var(--clr-primary-1);
  }

  .history-img {
    height: 414px;
    object-fit: cover;
  }

  /* MEDIA QUERIES */
  @media (min-width: 771px) {
    .about-flex {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2em;
    }
    .about-us {
      text-align: left;
      align-items: flex-start;
    }
    .about-us-images {
      display: block;
    }
  }

  @media (min-width: 741px) {
    .history-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
