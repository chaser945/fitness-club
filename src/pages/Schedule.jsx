import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { PageHero, ScheduleCard, WeekButton } from "../components"
import { classScheduleData, weekDays } from "../utils"

const Schedule = () => {
  const { day } = useParams()
  return (
    <Wrapper>
      <PageHero heading="schedule by day" />
      <div className="schedule-wrapper section-wrapper">
        <div className="days-wrapper">
          {weekDays.map((c, index) => {
            return (
              <Link key={index} to={`/schedule/${c}`}>
                <WeekButton weekDay={c} />
              </Link>
            )
          })}
        </div>
        <div className="gym-classes-wrapper">
          {classScheduleData[day].map((c, index) => {
            return <ScheduleCard key={index} data={c} />
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
  .gym-classes-wrapper {
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`
