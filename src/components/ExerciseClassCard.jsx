import styled from "styled-components"
import UnderlinedHeading from "./UnderlinedHeading"
import { BsPersonFill } from "react-icons/bs"
import { AiFillClockCircle } from "react-icons/ai"
import ButtonUniq from "./ButtonUniq"
import { Link } from "react-router-dom"

const ExerciseClassCard = ({ data }) => {
  const { title, teacher, timing, img_url } = data
  return (
    <Wrapper>
      <div
        className="class-card"
        style={{ backgroundImage: `url(${img_url})` }}
      >
        <div className="content-wrapper">
          <UnderlinedHeading
            heading={title}
            font_size="1.3rem"
            css_class="white"
          />
          <div className="content">
            <p className="teacher">
              <BsPersonFill className="icons" />
              {teacher}
            </p>
            <p className="timings">
              <AiFillClockCircle className="icons" />{" "}
              {timing.charAt(0).toUpperCase() + timing.slice(1)}
            </p>
          </div>
          <Link to="/pricing">
            <ButtonUniq text="join now" css_class="white" />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
export default ExerciseClassCard

const Wrapper = styled.div`
  .class-card {
    background: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    background-position: center center;
    background-size: cover;
    height: 400px;
    padding: 1.5em;
    display: flex;
    align-items: flex-end;
    border-radius: 15px;
  }

  .content-wrapper {
    color: white;
  }

  .content {
    display: flex;
    gap: 1.3em;
    align-items: center;
  }

  .teacher,
  .timings {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.2em;
    /* margin: 0; */
  }
  .teacher {
    text-transform: capitalize;
  }
  .icons {
    /* color: var(--clr-primary-1); */
  }
`
