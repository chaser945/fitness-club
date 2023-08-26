import styled from "styled-components"
import { PageHero, RegForm } from "../components"

const SignIn = () => {
  return (
    <Wrapper>
      <PageHero heading="sign in" />
      <div className="sign-in-wrapper">
        <RegForm signInMode={true} />
      </div>
    </Wrapper>
  )
}
export default SignIn

const Wrapper = styled.section``
