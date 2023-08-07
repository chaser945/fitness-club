import styled from "styled-components"
import { BsArrowRightShort } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { closeButtonOut, openButtonOut } from "../features/appSlice/appSlice"
const ButtonUniq = ({
  text,
  backColor = "var(--clr-primary-1)",
  textColor,
  buttonOutColor,
}) => {
  const { showButtonOut } = useSelector((store) => store.appSlice)
  const dispatch = useDispatch()
  const handleMouseOver = () => {
    dispatch(closeButtonOut())
  }
  const handleMouseLeave = () => {
    dispatch(openButtonOut())
  }

  return (
    <Wrapper>
      <div className="button-wrapper">
        <div
          className={`button-out ${!showButtonOut && "hide"}`}
          style={{
            border: showButtonOut
              ? `2px solid ${buttonOutColor || "var(--clr-primary-7)"}`
              : `2px solid ${backColor}`,
          }}
        ></div>
        <button
          className="button-uniq"
          style={{
            backgroundColor: backColor,
            color: textColor || "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
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
    /* background-color: black;
    border: 2px solid magenta; */
  }
  .button-uniq {
    position: relative;
    z-index: 2;
    border: none;
    padding: 0.8em 1.8em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .button-out {
    position: absolute;
    width: 181px;
    height: 52px;
    transform: translate(12px, -12px);
    transition: all linear 0.2s;
  }

  .button-out.hide {
    transform: translate(0, 0);
  }

  .arrow-icon {
    font-size: 2rem;
  }
`
