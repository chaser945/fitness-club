import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { FaPinterestSquare } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import styled from "styled-components"

const SocialIcons = () => {
  return (
    <Wrapper>
      <div className="social-wrapper">
        <AiFillFacebook className="social-icon" />
        <AiFillTwitterSquare className="social-icon" />
        <FaPinterestSquare className="social-icon" />
        <AiFillYoutube className="social-icon" />
      </div>
    </Wrapper>
  )
}
export default SocialIcons

const Wrapper = styled.div`
  .social-wrapper {
    display: flex;
    gap: 1em;
  }

  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-border);
    transition: all linear 0.2s;
    /* color: var(--clr-primary-1); */
  }

  .social-icon:hover,
  .social-icon:focus {
    color: var(--clr-primary-1);
  }
`
