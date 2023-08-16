import styled from "styled-components"
import { BsArrowRightShort } from "react-icons/bs"
const ButtonUniq = ({ text, css_class }) => {
  return (
    <Wrapper>
      <div className={`button-wrapper ${css_class}`}>
        <div className={`button-out ${css_class}`}>
          {text || "no text"}{" "}
          <BsArrowRightShort className={`arrow-icon ${css_class}`} />
        </div>
        <button className={`button-uniq ${css_class}`}>
          {text || "no text"}{" "}
          <BsArrowRightShort className={`arrow-icon ${css_class}`} />
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
    color: transparent;
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

  /* white button uniq */
  .button-uniq.white {
    background-color: white;
    color: black;
  }

  .arrow-icon.white {
    color: var(--clr-primary-1);
  }

  .button-out.white {
    border: 1px solid var(--clr-border-3);
  }

  .button-wrapper.white:hover .button-out {
    border: 2px solid white;
  }
`
