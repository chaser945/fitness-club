import { useParams } from "react-router-dom"
import styled from "styled-components"

const WeekButton = ({ weekDay, clrBorder, clrBack, clrFont }) => {
  const { day } = useParams()
  return (
    <Wrapper>
      <button className={`button-wrapper ${day === weekDay && "active"}`}>
        {weekDay}
      </button>
    </Wrapper>
  )
}
export default WeekButton

const Wrapper = styled.div`
  .button-wrapper {
    padding: 0.8em 2em;
    border-radius: 40px;
    border: 1px solid var(--clr-border-1);
    text-transform: capitalize;
    background-color: white;
    transition: all linear 0.2s;
    cursor: pointer;
  }

  .button-wrapper:hover,
  .button-wrapper:focus {
    background-color: var(--clr-primary-1);
    color: white;
    box-shadow: var(--box-shadow);
  }
  .button-wrapper.active {
    color: white;
    background-color: var(--clr-primary-1);
  }
`
