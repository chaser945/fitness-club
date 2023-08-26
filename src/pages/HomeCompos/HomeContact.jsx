import { Link } from "react-router-dom"
import styled from "styled-components"
import { ButtonUniq } from "../../components"

const HomeContact = () => {
  return (
    <Wrapper>
      <div className="contact-wrapper">
        <div className="content section-wrapper">
          <h1 className="contact-h1">need a fitness trainer ?</h1>
          <h1 className="contact-call">
            <span className="red-t">Call:</span> +123-456789
          </h1>
          <Link to="pricing">
            <ButtonUniq text="purchase now" css_class="white" />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeContact

const Wrapper = styled.section`
  .contact-wrapper {
    background-image: url("https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80");
    background-position: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    padding: 4em 1.5em;
  }
  .content {
    color: white;
  }
  .contact-call {
    color: white;
  }
  .contact-h1 {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .red-t {
    color: var(--clr-primary-1);
  }
`
