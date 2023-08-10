import { Link } from "react-router-dom"
import styled from "styled-components"
import { PageHero, WeekButton } from "../components"
import { weekDays } from "../utils"

const Schedule = () => {
  return (
    <Wrapper>
      <div className="schedule-wrapper">
        <PageHero heading="schedule by day" />
        <div className="days-wrapper">
          {weekDays.map((c, index) => {
            return (
              <Link key={index} to={`/schedule/${c}`}>
                <WeekButton weekDay={c} />
              </Link>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Schedule

const Wrapper = styled.div`
  .days-wrapper {
    padding: 4em 1em 2em 1em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }
`
