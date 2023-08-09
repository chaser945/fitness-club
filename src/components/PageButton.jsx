import styled from "styled-components"

const PageButton = ({ pageNum, backColor }) => {
  return (
    <Wrapper>
      <span
        className="page"
        style={{
          backgroundColor: backColor ? "var(--clr-primary-1)" : "white",
          color: backColor ? "white" : "black",
        }}
      >
        {pageNum}
      </span>
    </Wrapper>
  )
}
export default PageButton

const Wrapper = styled.div`
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    font-weight: 500;
    font-size: 1.2rem;
    border: 1px solid var(--clr-border-1);
    border-radius: 5px;
    cursor: pointer;
    transition: all linear 0.2s;
    /* color: white; */
    /* background-color: var(--clr-primary-1); */
  }

  .page:hover,
  .page:focus {
    border: 1px solid var(--clr-primary-1);
  }
`
