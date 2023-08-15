import styled from "styled-components"

const UnderlinedHeading = ({ heading, font_size }) => {
  return (
    <Wrapper>
      <div className="underlined-heading">
        <h1 className="heading" style={{ fontSize: font_size }}>
          {heading || "no text"}
        </h1>
        <div className="underline"></div>
      </div>
    </Wrapper>
  )
}
export default UnderlinedHeading

const Wrapper = styled.div`
  .heading {
    font-size: 1.7rem;
    margin-top: 1em;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  .underline {
    height: 4px;
    width: 65px;
    background-color: var(--clr-primary-1);
  }
`
