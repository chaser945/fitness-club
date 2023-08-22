import styled from "styled-components"

const TourCard = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <div className="tour-card">
        <span className="tour-icon">{icon}</span>
        <h1 className="tour-card-title">{title}</h1>
        <p className="tour-card-text">{text}</p>
      </div>
    </Wrapper>
  )
}
export default TourCard

const Wrapper = styled.div`
  .tour-card {
    padding: 2em;
    text-align: center;
    box-shadow: var(--box-shadow);
    border-radius: 30px 0 30px 0;
    background-color: white;
    height: 310px;
  }
  .tour-icon {
    color: var(--clr-primary-1);
    font-size: 4rem;
  }

  .tour-card-title {
    margin-top: 0.5em;
    text-transform: uppercase;
  }
`
