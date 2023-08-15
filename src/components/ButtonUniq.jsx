import styled from "styled-components"
import { BsArrowRightShort } from "react-icons/bs"
const ButtonUniq = ({ text }) => {
  return (
    <Wrapper>
      <div className="button-wrapper">
        <div className="button-out">
          {text || "no text"} <BsArrowRightShort className="arrow-icon" />
        </div>
        <button className="button-uniq">
          {text || "no text"} <BsArrowRightShort className="arrow-icon" />
        </button>
      </div>
    </Wrapper>
  )
}
export default ButtonUniq

const Wrapper = styled.div`
  .button-wrapper {
    position: relative;
    padding-top: 1em;
  }
  .button-uniq {
    position: relative;
    background-color: var(--clr-primary-1);
    color: white;
    z-index: 2;
    border: none;
    padding: 0.8em 1.8em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all linear 0.2s;
  }

  .button-out {
    padding: 0em 1.8em;
    height: 53px;
    color: white;
    position: absolute;
    transform: translate(12px, -12px);
    border: 2px solid var(--clr-primary-7);
    z-index: 1;
    transition: all linear 0.2s;
  }

  .button-wrapper {
    transition: all linear 0.3s;
    display: inline-block;
  }

  .button-wrapper:hover .button-out {
    border: 2px solid var(--clr-primary-1);
    transform: translate(0, 0);
  }

  .arrow-icon {
    font-size: 2rem;
  }
`
