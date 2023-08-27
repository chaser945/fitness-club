import styled from "styled-components"
import Logo from "./Logo"
import { MdClose } from "react-icons/md"
import { galleryImages } from "../utils"
// importing icons
import { MdLocationPin } from "react-icons/md"
import { BiSolidPhone } from "react-icons/bi"
import { GrMail } from "react-icons/gr"
// social icons
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
// importing function
import { toggleInfoBar } from "../features/appSlice/appSlice"

const InfoBar = () => {
  const { showInfoBar } = useSelector((store) => store.appSlice)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className={`bar-wrapper ${showInfoBar ? "open" : "close"}`}>
        <div className="header">
          <Logo headingColor="black" textColor="black" />
          <MdClose
            className="close-icon"
            onClick={() => dispatch(toggleInfoBar())}
          />
        </div>
        {/* about */}
        <section className="about">
          <h2 className="about-h1">about us</h2>
          <p className="about-p">
            Our state-of-the-art gym is a sanctuary for those seeking to sculpt
            their bodies, boost their energy, and elevate their wellness
            journey. With expert trainers guiding your every move, cutting-edge
            equipment at your disposal, and a vibrant community fostering
            motivation, we are more than just a gym – we're your partner in
            achieving greatness.
          </p>
        </section>
        {/* gallery */}
        <section className="gallery">
          <h2 className="gallery-h1">gallery</h2>
          <div className="gallery-img-wrapper">
            {galleryImages[0].slice(0, 6).map((galleryImg) => {
              return (
                <img
                  src={galleryImg.url}
                  alt="person in gym"
                  className="gallery-img"
                />
              )
            })}
          </div>
        </section>
        {/* contact */}
        <section className="contact">
          <h2 className="contact-h1">contact info</h2>
          <p className="contact-p">
            {" "}
            <MdLocationPin className="contact-icon" /> 53 Street, California
          </p>
          <p className="contact-p">
            {" "}
            <BiSolidPhone className="contact-icon" />
            +123-5678912
          </p>
          <p className="contact-p">
            <GrMail className="contact-icon" />
            fitnessclub@gmail.com
          </p>
        </section>
        {/* follow */}
        <section className="follow">
          <h2 className="follow-h1">follow us</h2>
          <div className="follow-icons-wrapper">
            <span className="icon-wrapper">
              <FaFacebookF className="social-icon" />
            </span>
            <span className="icon-wrapper">
              <FaTwitter className="social-icon" />
            </span>
            <span className="icon-wrapper">
              <FaInstagram className="social-icon" />
            </span>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
export default InfoBar

const Wrapper = styled.div`
  .bar-wrapper {
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    /* height: 100vh; */
    width: 100vw;
    z-index: 20000;
    background-color: white;
    padding: 2.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: all linear 0.3s;
  }
  .bar-wrapper.close {
    transform: translateX(-100%);
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
  }
  .close-icon {
    color: var(--clr-primary-1);
    font-size: 2.2rem;
    font-weight: bold;
    cursor: pointer;
  }
  .about-h1,
  .gallery-h1,
  .contact-h1,
  .follow-h1 {
    text-transform: capitalize;
    font-size: 1.3rem;
  }
  .gallery {
    margin-bottom: 1em;
  }
  .gallery-img-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5em;
    justify-content: center;
  }
  .gallery-img {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border-radius: 10px;
  }
  .contact-p {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .contact-icon {
    color: var(--clr-primary-1);
    font-size: 1.2rem;
  }
  .follow-icons-wrapper {
    display: flex;
    gap: 1em;
  }
  .icon-wrapper {
    background-color: var(--clr-primary-1);
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .social-icon {
    color: white;
    font-size: 1.5rem;
  }

  @media (min-width: 400px) {
    .bar-wrapper {
      max-width: 400px;
    }
  }
`
