import { Link } from "react-router-dom"
import styled from "styled-components"
import WeekButton from "./WeekButton"

const ScheduleCard = ({ data }) => {
  console.log(data)
  const { name_of_class, time, trainer } = data
  return (
    <Wrapper>
      <div className="card">
        <div className="content-wrapper">
          <h4 className="heading">class name</h4>
          <h3 className="content">{name_of_class}</h3>
        </div>
        <div className="content-wrapper">
          <h4 className="heading">time</h4>
          <h3 className="content">{time}</h3>
        </div>
        <div className="content-wrapper">
          <h4 className="heading">trainer</h4>
          <h3 className="content">{trainer}</h3>
        </div>
        <Link to="/pricing">
          <WeekButton
            weekDay="join now"
            clrBack="var(--clr-border)"
            clrFont="white"
          />
        </Link>
      </div>
    </Wrapper>
  )
}
export default ScheduleCard

const Wrapper = styled.div`
  .card {
    background-color: var(--clr-body);
    padding: 1.5em 3em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    align-items: center;
    text-align: center;
  }
  .heading {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--clr-font);
    text-transform: capitalize;
    margin: 0;
  }
  .content {
    text-transform: capitalize;
  }

  @media (min-width: 872px) {
    .card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`
