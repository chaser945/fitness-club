import { AiFillFacebook } from "react-icons/ai"
import { AiFillTwitterSquare } from "react-icons/ai"
import { FaPinterestSquare } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import styled from "styled-components"

const SocialIcons = () => {
  return (
    <Wrapper>
      <div className="social-wrapper">
        <a target="_blank" href="https://www.facebook.com/">
          <AiFillFacebook className="social-icon" />
        </a>
        <a target="_blank" href="https://twitter.com/?lang=en">
          <AiFillTwitterSquare className="social-icon" />
        </a>
        <a target="_blank" href="https://www.pinterest.com/">
          <FaPinterestSquare className="social-icon" />
        </a>
        <a target="_blank" href="https://www.youtube.com/">
          <AiFillYoutube className="social-icon" />
        </a>
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
