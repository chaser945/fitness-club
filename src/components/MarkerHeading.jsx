import styled from "styled-components"
import redMarker from "../assets/images/red-marker.svg"

const MarkerHeading = ({ heading }) => {
  return (
    <Wrapper>
      <div
        className="heading-wrapper"
        style={{ backgroundImage: `url(${redMarker})` }}
      >
        <h4 className="heading">{heading}</h4>
      </div>
    </Wrapper>
  )
}
export default MarkerHeading

const Wrapper = styled.div`
  .heading-wrapper {
    background-repeat: no-repeat;
    display: inline-block;
    min-width: 210px;
    color: white;
    text-align: center;
    object-position: center center;
    height: 40px;
    text-transform: uppercase;
    /* background-color: black; */
  }
  .heading {
    margin: 0;
    margin-top: 0.6em;
    font-size: 0.9rem;
  }
`
