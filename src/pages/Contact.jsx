import styled from "styled-components"
import { PageHero, SocialIcons, UnderlinedHeading } from "../components"
import { exerciseCategories } from "../utils"

const Contact = () => {
  return (
    <Wrapper>
      <PageHero heading="contact us" />
      <div className="contact-wrapper section-wrapper">
        {/* content */}
        <div className="content">
          <div className="header">
            <h1 className="title">we are here for help! to shape your body.</h1>
            <p className="text">
              Fitness club offers state-of-the-art fitness equipment for varied
              workout routines with expert personal trainers for personalized
              guidance and support. Moreover, diverse fitness classes are
              offered catering to all levels of fitness. Relaxation amenities
              like sauna, steam room, and massage services are also available.
            </p>
          </div>
          {/* content boxes */}
          <div className="content-box-wrapper">
            <div className="content-box">
              <UnderlinedHeading
                heading="New York City, USA"
                font_size="1.2rem"
              />
              <p className="box-text">85 Briston Mint Street,</p>
              <p className="box-text">London, E1 8LG, USA</p>
            </div>
            <div className="content-box">
              <UnderlinedHeading heading="Opening hours" font_size="1.2rem" />
              <p className="box-text">Mon to Fri: 7:30 am — 1:00 am</p>
              <p className="box-text">Mon to Fri: 7:30 am — 1:00 am</p>
            </div>
            <div className="content-box">
              <UnderlinedHeading heading="information" font_size="1.2rem" />
              <p className="box-text">+800-123-4567</p>
              <p className="box-text"> gymat@gymail.com</p>
            </div>
            <div className="content-box">
              <UnderlinedHeading heading="follow us on" font_size="1.2rem" />
              <SocialIcons />
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <UnderlinedHeading heading="leave us your info" />
            <input
              type="text"
              placeholder="Full Name *"
              className="contact-input"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="contact-input"
              required
            />
            <select className="select-box">
              <option className="select-option">select class</option>
              {exerciseCategories.map((category, index) => {
                const { name } = category
                return (
                  <option key={index} className="select-option">
                    {name}
                  </option>
                )
              })}
            </select>
            <textarea
              placeholder="Comment"
              className="contact-textarea"
            ></textarea>
            <button className="submit-button">submit now</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
export default Contact

const Wrapper = styled.div`
  .contact-wrapper {
    padding: 4em 1.5em 3em 1.5em;
    display: grid;
    gap: 4em;
    align-items: center;
    /* background-color: magenta; */
  }

  @media (min-width: 1100px) {
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2em;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    max-width: 480px;
    margin: 0 auto;
  }

  .title {
    text-transform: capitalize;
  }

  .content-box-wrapper {
    display: grid;
    gap: 2em;
  }

  @media (min-width: 550px) {
    .content-box-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  .box-text {
    margin-bottom: 0;
    margin-top: 0.2em;
  }

  .box-text:first-of-type {
    margin-top: 1em;
  }

  .content-box:last-of-type {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  /* CONTACT FORM */

  .contact-form-wrapper {
    display: block;
    /* background-color: magenta; */
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .contact-form {
    background-color: var(--clr-body);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    padding: 0.5em 1.5em 3em 1.5em;
  }

  .contact-input {
    background-color: white;
    border: 1px solid var(--clr-border-1);
    letter-spacing: 0;
  }

  .select-box {
    padding: 1em;
    border: none;
    text-transform: capitalize;
  }

  .contact-textarea {
    height: 100px;
    padding: 1em;
    font-size: 0.8rem;
    border: 1px solid var(--clr-border-1);
    letter-spacing: 0;
  }

  .contact-input,
  .select-box,
  .contact-textarea {
    align-self: stretch;
  }

  .submit-button {
    background-color: var(--clr-primary-1);
    padding: 1em 2em;
    border: none;
    color: white;
    text-transform: uppercase;
  }
`
