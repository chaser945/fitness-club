import styled from "styled-components"
import { PageHero, RegForm } from "../components"

const SignUp = () => {
  return (
    <Wrapper>
      <PageHero heading="sign up" />
      <div className="sign-up-wrapper">
        <RegForm />
      </div>
    </Wrapper>
  )
}
export default SignUp

const Wrapper = styled.section``
