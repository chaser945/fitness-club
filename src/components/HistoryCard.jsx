import { GiLouvrePyramid } from "react-icons/gi"
import styled from "styled-components"

const HistoryCard = ({ icon, heading, text }) => {
  return (
    <Wrapper>
      <div className="history-card">
        {icon}
        <h1 className="heading">{heading}</h1>
        <p className="text">
          {text ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce. In metus vulputate eu scelerisque felis imperdiet proin. "}
        </p>
      </div>
    </Wrapper>
  )
}
export default HistoryCard

const Wrapper = styled.div`
  .history-card {
    background-color: white;
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .heading {
    text-transform: capitalize;
    margin-bottom: 0.2em;
    font-size: 2rem;
  }

  .text {
    max-width: 310px;
  }
`
